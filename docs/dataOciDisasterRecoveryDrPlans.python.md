# `dataOciDisasterRecoveryDrPlans` Submodule <a name="`dataOciDisasterRecoveryDrPlans` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDisasterRecoveryDrPlans <a name="DataOciDisasterRecoveryDrPlans" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans oci_disaster_recovery_dr_plans}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dr_protection_group_id: str,
  display_name: str = None,
  dr_plan_id: str = None,
  dr_plan_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDisasterRecoveryDrPlansFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanId">dr_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanType">dr_plan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drProtectionGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}.

---

##### `dr_plan_id`<sup>Optional</sup> <a name="dr_plan_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}.

---

##### `dr_plan_type`<sup>Optional</sup> <a name="dr_plan_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.drPlanType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#filter DataOciDisasterRecoveryDrPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanId">reset_dr_plan_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanType">reset_dr_plan_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDisasterRecoveryDrPlansFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_dr_plan_id` <a name="reset_dr_plan_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanId"></a>

```python
def reset_dr_plan_id() -> None
```

##### `reset_dr_plan_type` <a name="reset_dr_plan_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetDrPlanType"></a>

```python
def reset_dr_plan_type() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlans resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDisasterRecoveryDrPlans resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDisasterRecoveryDrPlans to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDisasterRecoveryDrPlans that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDisasterRecoveryDrPlans to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanCollection">dr_plan_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList">DataOciDisasterRecoveryDrPlansDrPlanCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList">DataOciDisasterRecoveryDrPlansFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanIdInput">dr_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanTypeInput">dr_plan_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupIdInput">dr_protection_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanId">dr_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanType">dr_plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dr_plan_collection`<sup>Required</sup> <a name="dr_plan_collection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanCollection"></a>

```python
dr_plan_collection: DataOciDisasterRecoveryDrPlansDrPlanCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList">DataOciDisasterRecoveryDrPlansDrPlanCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filter"></a>

```python
filter: DataOciDisasterRecoveryDrPlansFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList">DataOciDisasterRecoveryDrPlansFilterList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `dr_plan_id_input`<sup>Optional</sup> <a name="dr_plan_id_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanIdInput"></a>

```python
dr_plan_id_input: str
```

- *Type:* str

---

##### `dr_plan_type_input`<sup>Optional</sup> <a name="dr_plan_type_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanTypeInput"></a>

```python
dr_plan_type_input: str
```

- *Type:* str

---

##### `dr_protection_group_id_input`<sup>Optional</sup> <a name="dr_protection_group_id_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupIdInput"></a>

```python
dr_protection_group_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDisasterRecoveryDrPlansFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dr_plan_id`<sup>Required</sup> <a name="dr_plan_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanId"></a>

```python
dr_plan_id: str
```

- *Type:* str

---

##### `dr_plan_type`<sup>Required</sup> <a name="dr_plan_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drPlanType"></a>

```python
dr_plan_type: str
```

- *Type:* str

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlans.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDisasterRecoveryDrPlansConfig <a name="DataOciDisasterRecoveryDrPlansConfig" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dr_protection_group_id: str,
  display_name: str = None,
  dr_plan_id: str = None,
  dr_plan_type: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDisasterRecoveryDrPlansFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanId">dr_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanType">dr_plan_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_protection_group_id DataOciDisasterRecoveryDrPlans#dr_protection_group_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#display_name DataOciDisasterRecoveryDrPlans#display_name}.

---

##### `dr_plan_id`<sup>Optional</sup> <a name="dr_plan_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanId"></a>

```python
dr_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_id DataOciDisasterRecoveryDrPlans#dr_plan_id}.

---

##### `dr_plan_type`<sup>Optional</sup> <a name="dr_plan_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.drPlanType"></a>

```python
dr_plan_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#dr_plan_type DataOciDisasterRecoveryDrPlans#dr_plan_type}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDisasterRecoveryDrPlansFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#filter DataOciDisasterRecoveryDrPlans#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#id DataOciDisasterRecoveryDrPlans#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#state DataOciDisasterRecoveryDrPlans#state}.

---

### DataOciDisasterRecoveryDrPlansDrPlanCollection <a name="DataOciDisasterRecoveryDrPlansDrPlanCollection" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection()
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItems <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems()
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups()
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps()
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep()
```


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation()
```


### DataOciDisasterRecoveryDrPlansFilter <a name="DataOciDisasterRecoveryDrPlansFilter" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#name DataOciDisasterRecoveryDrPlans#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#values DataOciDisasterRecoveryDrPlans#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#regex DataOciDisasterRecoveryDrPlans#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#name DataOciDisasterRecoveryDrPlans#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#values DataOciDisasterRecoveryDrPlans#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/disaster_recovery_dr_plans#regex DataOciDisasterRecoveryDrPlans#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.drProtectionGroupId">dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.lifeCycleDetails">life_cycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerDrProtectionGroupId">peer_dr_protection_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerRegion">peer_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.planGroups">plan_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems">DataOciDisasterRecoveryDrPlansDrPlanCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dr_protection_group_id`<sup>Required</sup> <a name="dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.drProtectionGroupId"></a>

```python
dr_protection_group_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `life_cycle_details`<sup>Required</sup> <a name="life_cycle_details" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.lifeCycleDetails"></a>

```python
life_cycle_details: str
```

- *Type:* str

---

##### `peer_dr_protection_group_id`<sup>Required</sup> <a name="peer_dr_protection_group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerDrProtectionGroupId"></a>

```python
peer_dr_protection_group_id: str
```

- *Type:* str

---

##### `peer_region`<sup>Required</sup> <a name="peer_region" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.peerRegion"></a>

```python
peer_region: str
```

- *Type:* str

---

##### `plan_groups`<sup>Required</sup> <a name="plan_groups" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.planGroups"></a>

```python
plan_groups: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlansDrPlanCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItems">DataOciDisasterRecoveryDrPlansDrPlanCollectionItems</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.isPauseEnabled">is_pause_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_pause_enabled`<sup>Required</sup> <a name="is_pause_enabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.isPauseEnabled"></a>

```python
is_pause_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.steps"></a>

```python
steps: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroups</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.errorMode">error_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.memberId">member_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.userDefinedStep">user_defined_step</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `error_mode`<sup>Required</sup> <a name="error_mode" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.errorMode"></a>

```python
error_mode: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `member_id`<sup>Required</sup> <a name="member_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.memberId"></a>

```python
member_id: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_defined_step`<sup>Required</sup> <a name="user_defined_step" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.userDefinedStep"></a>

```python
user_defined_step: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsSteps</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion">function_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation">object_storage_script_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody">request_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser">run_as_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId">run_on_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion">run_on_instance_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand">script_command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.stepType">step_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `function_region`<sup>Required</sup> <a name="function_region" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion"></a>

```python
function_region: str
```

- *Type:* str

---

##### `object_storage_script_location`<sup>Required</sup> <a name="object_storage_script_location" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation"></a>

```python
object_storage_script_location: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a>

---

##### `request_body`<sup>Required</sup> <a name="request_body" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody"></a>

```python
request_body: str
```

- *Type:* str

---

##### `run_as_user`<sup>Required</sup> <a name="run_as_user" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser"></a>

```python
run_as_user: str
```

- *Type:* str

---

##### `run_on_instance_id`<sup>Required</sup> <a name="run_on_instance_id" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId"></a>

```python
run_on_instance_id: str
```

- *Type:* str

---

##### `run_on_instance_region`<sup>Required</sup> <a name="run_on_instance_region" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion"></a>

```python
run_on_instance_region: str
```

- *Type:* str

---

##### `script_command`<sup>Required</sup> <a name="script_command" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand"></a>

```python
script_command: str
```

- *Type:* str

---

##### `step_type`<sup>Required</sup> <a name="step_type" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.stepType"></a>

```python
step_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsPlanGroupsStepsUserDefinedStep</a>

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionList <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference <a name="DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection">DataOciDisasterRecoveryDrPlansDrPlanCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.items"></a>

```python
items: DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList">DataOciDisasterRecoveryDrPlansDrPlanCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDisasterRecoveryDrPlansDrPlanCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansDrPlanCollection">DataOciDisasterRecoveryDrPlansDrPlanCollection</a>

---


### DataOciDisasterRecoveryDrPlansFilterList <a name="DataOciDisasterRecoveryDrPlansFilterList" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDisasterRecoveryDrPlansFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDisasterRecoveryDrPlansFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]]

---


### DataOciDisasterRecoveryDrPlansFilterOutputReference <a name="DataOciDisasterRecoveryDrPlansFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_disaster_recovery_dr_plans

dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDisasterRecoveryDrPlansFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDisasterRecoveryDrPlans.DataOciDisasterRecoveryDrPlansFilter">DataOciDisasterRecoveryDrPlansFilter</a>]

---



