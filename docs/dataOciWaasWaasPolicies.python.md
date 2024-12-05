# `dataOciWaasWaasPolicies` Submodule <a name="`dataOciWaasWaasPolicies` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasWaasPolicies <a name="DataOciWaasWaasPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies oci_waas_waas_policies}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_names: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWaasWaasPoliciesFilter]] = None,
  id: str = None,
  ids: typing.List[str] = None,
  states: typing.List[str] = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.displayNames">display_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.states">states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}.

---

##### `display_names`<sup>Optional</sup> <a name="display_names" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.displayNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#filter DataOciWaasWaasPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.ids"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}.

---

##### `states`<sup>Optional</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.states"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetDisplayNames">reset_display_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetIds">reset_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetStates">reset_states</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciWaasWaasPoliciesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]

---

##### `reset_display_names` <a name="reset_display_names" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetDisplayNames"></a>

```python
def reset_display_names() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ids` <a name="reset_ids" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetIds"></a>

```python
def reset_ids() -> None
```

##### `reset_states` <a name="reset_states" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetStates"></a>

```python
def reset_states() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWaasWaasPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWaasWaasPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWaasWaasPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWaasWaasPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasWaasPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList">DataOciWaasWaasPoliciesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.waasPolicies">waas_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList">DataOciWaasWaasPoliciesWaasPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNamesInput">display_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idsInput">ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.statesInput">states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNames">display_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.ids">ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.states">states</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filter"></a>

```python
filter: DataOciWaasWaasPoliciesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList">DataOciWaasWaasPoliciesFilterList</a>

---

##### `waas_policies`<sup>Required</sup> <a name="waas_policies" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.waasPolicies"></a>

```python
waas_policies: DataOciWaasWaasPoliciesWaasPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList">DataOciWaasWaasPoliciesWaasPoliciesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_names_input`<sup>Optional</sup> <a name="display_names_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNamesInput"></a>

```python
display_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciWaasWaasPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ids_input`<sup>Optional</sup> <a name="ids_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.idsInput"></a>

```python
ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `states_input`<sup>Optional</sup> <a name="states_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.statesInput"></a>

```python
states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_names`<sup>Required</sup> <a name="display_names" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.displayNames"></a>

```python
display_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ids`<sup>Required</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `states`<sup>Required</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.states"></a>

```python
states: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasWaasPoliciesConfig <a name="DataOciWaasWaasPoliciesConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_names: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciWaasWaasPoliciesFilter]] = None,
  id: str = None,
  ids: typing.List[str] = None,
  states: typing.List[str] = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.displayNames">display_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.ids">ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.states">states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}.

---

##### `display_names`<sup>Optional</sup> <a name="display_names" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.displayNames"></a>

```python
display_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciWaasWaasPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#filter DataOciWaasWaasPolicies#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ids`<sup>Optional</sup> <a name="ids" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.ids"></a>

```python
ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}.

---

##### `states`<sup>Optional</sup> <a name="states" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.states"></a>

```python
states: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}.

---

### DataOciWaasWaasPoliciesFilter <a name="DataOciWaasWaasPoliciesFilter" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#name DataOciWaasWaasPolicies#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#values DataOciWaasWaasPolicies#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#regex DataOciWaasWaasPolicies#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#name DataOciWaasWaasPolicies#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#values DataOciWaasWaasPolicies#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policies#regex DataOciWaasWaasPolicies#regex}.

---

### DataOciWaasWaasPoliciesWaasPolicies <a name="DataOciWaasWaasPoliciesWaasPolicies" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies()
```


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroups <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups()
```


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup()
```


### DataOciWaasWaasPoliciesWaasPoliciesOrigins <a name="DataOciWaasWaasPoliciesWaasPoliciesOrigins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins()
```


### DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders()
```


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig()
```


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks()
```


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfig <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings()
```


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasWaasPoliciesFilterList <a name="DataOciWaasWaasPoliciesFilterList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciWaasWaasPoliciesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]]

---


### DataOciWaasWaasPoliciesFilterOutputReference <a name="DataOciWaasWaasPoliciesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciWaasWaasPoliciesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesFilter">DataOciWaasWaasPoliciesFilter</a>]

---


### DataOciWaasWaasPoliciesWaasPoliciesList <a name="DataOciWaasWaasPoliciesWaasPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.originGroup">origin_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups">DataOciWaasWaasPoliciesWaasPoliciesOriginGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `origin_group`<sup>Required</sup> <a name="origin_group" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.originGroup"></a>

```python
origin_group: DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesOriginGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroups">DataOciWaasWaasPoliciesWaasPoliciesOriginGroups</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsList <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.customHeaders">custom_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins">DataOciWaasWaasPoliciesWaasPoliciesOrigins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.customHeaders"></a>

```python
custom_headers: DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList">DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList</a>

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesOrigins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOrigins">DataOciWaasWaasPoliciesWaasPoliciesOrigins</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.additionalDomains">additional_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.originGroups">origin_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.origins">origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList">DataOciWaasWaasPoliciesWaasPoliciesOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.policyConfig">policy_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.wafConfig">waf_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies">DataOciWaasWaasPoliciesWaasPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_domains`<sup>Required</sup> <a name="additional_domains" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.additionalDomains"></a>

```python
additional_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cname`<sup>Required</sup> <a name="cname" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `origin_groups`<sup>Required</sup> <a name="origin_groups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.originGroups"></a>

```python
origin_groups: DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList">DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.origins"></a>

```python
origins: DataOciWaasWaasPoliciesWaasPoliciesOriginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOriginsList">DataOciWaasWaasPoliciesWaasPoliciesOriginsList</a>

---

##### `policy_config`<sup>Required</sup> <a name="policy_config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.policyConfig"></a>

```python
policy_config: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `waf_config`<sup>Required</sup> <a name="waf_config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.wafConfig"></a>

```python
waf_config: DataOciWaasWaasPoliciesWaasPoliciesWafConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPolicies">DataOciWaasWaasPoliciesWaasPolicies</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">expected_response_code_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseText">expected_response_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">is_response_text_check_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expected_response_code_group`<sup>Required</sup> <a name="expected_response_code_group" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```python
expected_response_code_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expected_response_text`<sup>Required</sup> <a name="expected_response_text" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```python
expected_response_text: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_response_text_check_enabled`<sup>Required</sup> <a name="is_response_text_check_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```python
is_response_text_check_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">expiration_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `expiration_time_in_seconds`<sup>Required</sup> <a name="expiration_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```python
expiration_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.cipherGroup">cipher_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.clientAddressHeader">client_address_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.healthChecks">health_checks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isBehindCdn">is_behind_cdn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isCacheControlRespected">is_cache_control_respected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsEnabled">is_https_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsForced">is_https_forced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isOriginCompressionEnabled">is_origin_compression_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isResponseBufferingEnabled">is_response_buffering_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isSniEnabled">is_sni_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.loadBalancingMethod">load_balancing_method</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.tlsProtocols">tls_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.websocketPathPrefixes">websocket_path_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `cipher_group`<sup>Required</sup> <a name="cipher_group" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.cipherGroup"></a>

```python
cipher_group: str
```

- *Type:* str

---

##### `client_address_header`<sup>Required</sup> <a name="client_address_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.clientAddressHeader"></a>

```python
client_address_header: str
```

- *Type:* str

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.healthChecks"></a>

```python
health_checks: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList</a>

---

##### `is_behind_cdn`<sup>Required</sup> <a name="is_behind_cdn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isBehindCdn"></a>

```python
is_behind_cdn: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_cache_control_respected`<sup>Required</sup> <a name="is_cache_control_respected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```python
is_cache_control_respected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_https_enabled`<sup>Required</sup> <a name="is_https_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```python
is_https_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_https_forced`<sup>Required</sup> <a name="is_https_forced" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isHttpsForced"></a>

```python
is_https_forced: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_origin_compression_enabled`<sup>Required</sup> <a name="is_origin_compression_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```python
is_origin_compression_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_response_buffering_enabled`<sup>Required</sup> <a name="is_response_buffering_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```python
is_response_buffering_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sni_enabled`<sup>Required</sup> <a name="is_sni_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.isSniEnabled"></a>

```python
is_sni_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `load_balancing_method`<sup>Required</sup> <a name="load_balancing_method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```python
load_balancing_method: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList</a>

---

##### `tls_protocols`<sup>Required</sup> <a name="tls_protocols" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.tlsProtocols"></a>

```python
tls_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `websocket_path_prefixes`<sup>Required</sup> <a name="websocket_path_prefixes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```python
websocket_path_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig">DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">is_case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `is_case_sensitive`<sup>Required</sup> <a name="is_case_sensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```python
is_case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.bypassChallenges">bypass_challenges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectResponseCode">redirect_response_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">response_header_manipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bypass_challenges`<sup>Required</sup> <a name="bypass_challenges" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```python
bypass_challenges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.criteria"></a>

```python
criteria: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_response_code`<sup>Required</sup> <a name="redirect_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```python
redirect_response_code: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `response_header_manipulation`<sup>Required</sup> <a name="response_header_manipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```python
response_header_manipulation: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">allowed_rate_per_address</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">max_delayed_count_per_address</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_rate_per_address`<sup>Required</sup> <a name="allowed_rate_per_address" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```python
allowed_rate_per_address: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_delayed_count_per_address`<sup>Required</sup> <a name="max_delayed_count_per_address" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```python
max_delayed_count_per_address: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.cachingDuration">caching_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.clientCachingDuration">client_caching_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">is_client_caching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `caching_duration`<sup>Required</sup> <a name="caching_duration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```python
caching_duration: str
```

- *Type:* str

---

##### `client_caching_duration`<sup>Required</sup> <a name="client_caching_duration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```python
client_caching_duration: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.criteria"></a>

```python
criteria: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList</a>

---

##### `is_client_caching_enabled`<sup>Required</sup> <a name="is_client_caching_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```python
is_client_caching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.footerText">footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.headerText">header_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">session_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.submitLabel">submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

---

##### `session_expiration_in_seconds`<sup>Required</sup> <a name="session_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```python
session_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `submit_label`<sup>Required</sup> <a name="submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.submitLabel"></a>

```python
submit_label: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```python
exclusions: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">action_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">challenge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">failure_threshold_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">max_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">max_address_count_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_expiration_in_seconds`<sup>Required</sup> <a name="action_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```python
action_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `challenge_settings`<sup>Required</sup> <a name="challenge_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```python
challenge_settings: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList</a>

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold_expiration_in_seconds`<sup>Required</sup> <a name="failure_threshold_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```python
failure_threshold_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_address_count`<sup>Required</sup> <a name="max_address_count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```python
max_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_address_count_expiration_in_seconds`<sup>Required</sup> <a name="max_address_count_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```python
max_address_count_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">action_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">challenge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">failure_threshold_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">interaction_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">is_nat_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">recording_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">set_http_header</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_expiration_in_seconds`<sup>Required</sup> <a name="action_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```python
action_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `challenge_settings`<sup>Required</sup> <a name="challenge_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```python
challenge_settings: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList</a>

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold_expiration_in_seconds`<sup>Required</sup> <a name="failure_threshold_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```python
failure_threshold_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interaction_threshold`<sup>Required</sup> <a name="interaction_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```python
interaction_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_nat_enabled`<sup>Required</sup> <a name="is_nat_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```python
is_nat_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `recording_period_in_seconds`<sup>Required</sup> <a name="recording_period_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```python
recording_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `set_http_header`<sup>Required</sup> <a name="set_http_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```python
set_http_header: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">is_case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `is_case_sensitive`<sup>Required</sup> <a name="is_case_sensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```python
is_case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">action_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">are_redirects_challenged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.challengeSettings">challenge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isNatEnabled">is_nat_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.setHttpHeader">set_http_header</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_expiration_in_seconds`<sup>Required</sup> <a name="action_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```python
action_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `are_redirects_challenged`<sup>Required</sup> <a name="are_redirects_challenged" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```python
are_redirects_challenged: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `challenge_settings`<sup>Required</sup> <a name="challenge_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```python
challenge_settings: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.criteria"></a>

```python
criteria: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList</a>

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_nat_enabled`<sup>Required</sup> <a name="is_nat_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```python
is_nat_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `set_http_header`<sup>Required</sup> <a name="set_http_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```python
set_http_header: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.accessRules">access_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.addressRateLimiting">address_rate_limiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.cachingRules">caching_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.captchas">captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.customProtectionRules">custom_protection_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.deviceFingerprintChallenge">device_fingerprint_challenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.humanInteractionChallenge">human_interaction_challenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.jsChallenge">js_challenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.originGroups">origin_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.protectionSettings">protection_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.whitelists">whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig">DataOciWaasWaasPoliciesWaasPoliciesWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_rules`<sup>Required</sup> <a name="access_rules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.accessRules"></a>

```python
access_rules: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList</a>

---

##### `address_rate_limiting`<sup>Required</sup> <a name="address_rate_limiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.addressRateLimiting"></a>

```python
address_rate_limiting: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList</a>

---

##### `caching_rules`<sup>Required</sup> <a name="caching_rules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.cachingRules"></a>

```python
caching_rules: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList</a>

---

##### `captchas`<sup>Required</sup> <a name="captchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.captchas"></a>

```python
captchas: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList</a>

---

##### `custom_protection_rules`<sup>Required</sup> <a name="custom_protection_rules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.customProtectionRules"></a>

```python
custom_protection_rules: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList</a>

---

##### `device_fingerprint_challenge`<sup>Required</sup> <a name="device_fingerprint_challenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```python
device_fingerprint_challenge: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList</a>

---

##### `human_interaction_challenge`<sup>Required</sup> <a name="human_interaction_challenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.humanInteractionChallenge"></a>

```python
human_interaction_challenge: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList</a>

---

##### `js_challenge`<sup>Required</sup> <a name="js_challenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.jsChallenge"></a>

```python
js_challenge: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `origin_groups`<sup>Required</sup> <a name="origin_groups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.originGroups"></a>

```python
origin_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protection_settings`<sup>Required</sup> <a name="protection_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.protectionSettings"></a>

```python
protection_settings: DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList</a>

---

##### `whitelists`<sup>Required</sup> <a name="whitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.whitelists"></a>

```python
whitelists: DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfig">DataOciWaasWaasPoliciesWaasPoliciesWafConfig</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.isResponseInspected">is_response_inspected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">max_argument_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">max_name_length_per_argument</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">max_response_size_in_ki_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">max_total_name_length_of_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.mediaTypes">media_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">recommendations_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_response_inspected`<sup>Required</sup> <a name="is_response_inspected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```python
is_response_inspected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_argument_count`<sup>Required</sup> <a name="max_argument_count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```python
max_argument_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_name_length_per_argument`<sup>Required</sup> <a name="max_name_length_per_argument" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```python
max_name_length_per_argument: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_response_size_in_ki_b`<sup>Required</sup> <a name="max_response_size_in_ki_b" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```python
max_response_size_in_ki_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_name_length_of_arguments`<sup>Required</sup> <a name="max_total_name_length_of_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```python
max_total_name_length_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_types`<sup>Required</sup> <a name="media_types" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```python
media_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendations_period_in_days`<sup>Required</sup> <a name="recommendations_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```python
recommendations_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings">DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings</a>

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference <a name="DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policies

dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addressLists">address_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_lists`<sup>Required</sup> <a name="address_lists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.addressLists"></a>

```python
address_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicies.DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists">DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists</a>

---



