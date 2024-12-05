# `dataOciFusionAppsFusionEnvironments` Submodule <a name="`dataOciFusionAppsFusionEnvironments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironments <a name="DataOciFusionAppsFusionEnvironments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments oci_fusion_apps_fusion_environments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentsFilter]] = None,
  fusion_environment_family_id: str = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#filter DataOciFusionAppsFusionEnvironments#filter}

---

##### `fusion_environment_family_id`<sup>Optional</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.fusionEnvironmentFamilyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFusionEnvironmentFamilyId">reset_fusion_environment_family_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_fusion_environment_family_id` <a name="reset_fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetFusionEnvironmentFamilyId"></a>

```python
def reset_fusion_environment_family_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList">DataOciFusionAppsFusionEnvironmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentCollection">fusion_environment_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyIdInput">fusion_environment_family_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filter"></a>

```python
filter: DataOciFusionAppsFusionEnvironmentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList">DataOciFusionAppsFusionEnvironmentsFilterList</a>

---

##### `fusion_environment_collection`<sup>Required</sup> <a name="fusion_environment_collection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentCollection"></a>

```python
fusion_environment_collection: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]

---

##### `fusion_environment_family_id_input`<sup>Optional</sup> <a name="fusion_environment_family_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyIdInput"></a>

```python
fusion_environment_family_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentsConfig <a name="DataOciFusionAppsFusionEnvironmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentsFilter]] = None,
  fusion_environment_family_id: str = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#filter DataOciFusionAppsFusionEnvironments#filter}

---

##### `fusion_environment_family_id`<sup>Optional</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}.

---

### DataOciFusionAppsFusionEnvironmentsFilter <a name="DataOciFusionAppsFusionEnvironmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}.

---

### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules()
```


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentsFilterList <a name="DataOciFusionAppsFusionEnvironmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]]

---


### DataOciFusionAppsFusionEnvironmentsFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFusionAppsFusionEnvironmentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFilter">DataOciFusionAppsFusionEnvironmentsFilter</a>]

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyId">active_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyVersion">active_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.currentKeyLifecycleState">current_key_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyId">scheduled_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyStatus">scheduled_key_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyVersion">scheduled_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledLifecycleState">scheduled_lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_key_id`<sup>Required</sup> <a name="active_key_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyId"></a>

```python
active_key_id: str
```

- *Type:* str

---

##### `active_key_version`<sup>Required</sup> <a name="active_key_version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.activeKeyVersion"></a>

```python
active_key_version: str
```

- *Type:* str

---

##### `current_key_lifecycle_state`<sup>Required</sup> <a name="current_key_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.currentKeyLifecycleState"></a>

```python
current_key_lifecycle_state: str
```

- *Type:* str

---

##### `scheduled_key_id`<sup>Required</sup> <a name="scheduled_key_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyId"></a>

```python
scheduled_key_id: str
```

- *Type:* str

---

##### `scheduled_key_status`<sup>Required</sup> <a name="scheduled_key_status" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyStatus"></a>

```python
scheduled_key_status: str
```

- *Type:* str

---

##### `scheduled_key_version`<sup>Required</sup> <a name="scheduled_key_version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledKeyVersion"></a>

```python
scheduled_key_version: str
```

- *Type:* str

---

##### `scheduled_lifecycle_state`<sup>Required</sup> <a name="scheduled_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.scheduledLifecycleState"></a>

```python
scheduled_lifecycle_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.environmentMaintenanceOverride">environment_maintenance_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.monthlyPatchingOverride">monthly_patching_override</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes">quarterly_upgrade_begin_times</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environment_maintenance_override`<sup>Required</sup> <a name="environment_maintenance_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.environmentMaintenanceOverride"></a>

```python
environment_maintenance_override: str
```

- *Type:* str

---

##### `monthly_patching_override`<sup>Required</sup> <a name="monthly_patching_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.monthlyPatchingOverride"></a>

```python
monthly_patching_override: str
```

- *Type:* str

---

##### `quarterly_upgrade_begin_times`<sup>Required</sup> <a name="quarterly_upgrade_begin_times" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.quarterlyUpgradeBeginTimes"></a>

```python
quarterly_upgrade_begin_times: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue">begin_times_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType">override_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `begin_times_value`<sup>Required</sup> <a name="begin_times_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.beginTimesValue"></a>

```python
begin_times_value: str
```

- *Type:* str

---

##### `override_type`<sup>Required</sup> <a name="override_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.overrideType"></a>

```python
override_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.additionalLanguagePacks">additional_language_packs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.appliedPatchBundles">applied_patch_bundles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.createFusionEnvironmentAdminUserDetails">create_fusion_environment_admin_user_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.dnsPrefix">dns_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentFamilyId">fusion_environment_family_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentType">fusion_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.idcsDomainUrl">idcs_domain_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.isBreakGlassEnabled">is_break_glass_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyInfo">kms_key_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lockboxId">lockbox_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.maintenancePolicy">maintenance_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.publicUrl">public_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.refresh">refresh</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.subscriptionIds">subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.systemName">system_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpcomingMaintenance">time_upcoming_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_language_packs`<sup>Required</sup> <a name="additional_language_packs" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.additionalLanguagePacks"></a>

```python
additional_language_packs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `applied_patch_bundles`<sup>Required</sup> <a name="applied_patch_bundles" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.appliedPatchBundles"></a>

```python
applied_patch_bundles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `create_fusion_environment_admin_user_details`<sup>Required</sup> <a name="create_fusion_environment_admin_user_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.createFusionEnvironmentAdminUserDetails"></a>

```python
create_fusion_environment_admin_user_details: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `dns_prefix`<sup>Required</sup> <a name="dns_prefix" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.dnsPrefix"></a>

```python
dns_prefix: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fusion_environment_family_id`<sup>Required</sup> <a name="fusion_environment_family_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentFamilyId"></a>

```python
fusion_environment_family_id: str
```

- *Type:* str

---

##### `fusion_environment_type`<sup>Required</sup> <a name="fusion_environment_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.fusionEnvironmentType"></a>

```python
fusion_environment_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_domain_url`<sup>Required</sup> <a name="idcs_domain_url" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.idcsDomainUrl"></a>

```python
idcs_domain_url: str
```

- *Type:* str

---

##### `is_break_glass_enabled`<sup>Required</sup> <a name="is_break_glass_enabled" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.isBreakGlassEnabled"></a>

```python
is_break_glass_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_info`<sup>Required</sup> <a name="kms_key_info" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.kmsKeyInfo"></a>

```python
kms_key_info: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lockbox_id`<sup>Required</sup> <a name="lockbox_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.lockboxId"></a>

```python
lockbox_id: str
```

- *Type:* str

---

##### `maintenance_policy`<sup>Required</sup> <a name="maintenance_policy" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.maintenancePolicy"></a>

```python
maintenance_policy: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList</a>

---

##### `public_url`<sup>Required</sup> <a name="public_url" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.publicUrl"></a>

```python
public_url: str
```

- *Type:* str

---

##### `refresh`<sup>Required</sup> <a name="refresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.refresh"></a>

```python
refresh: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.rules"></a>

```python
rules: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subscription_ids`<sup>Required</sup> <a name="subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.subscriptionIds"></a>

```python
subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_name`<sup>Required</sup> <a name="system_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.systemName"></a>

```python
system_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_upcoming_maintenance`<sup>Required</sup> <a name="time_upcoming_maintenance" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpcomingMaintenance"></a>

```python
time_upcoming_maintenance: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.sourceFusionEnvironmentId">source_fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeOfRestorationPoint">time_of_restoration_point</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_fusion_environment_id`<sup>Required</sup> <a name="source_fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.sourceFusionEnvironmentId"></a>

```python
source_fusion_environment_id: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_of_restoration_point`<sup>Required</sup> <a name="time_of_restoration_point" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.timeOfRestorationPoint"></a>

```python
time_of_restoration_point: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeName">attribute_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeValue">attribute_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attribute_name`<sup>Required</sup> <a name="attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeName"></a>

```python
attribute_name: str
```

- *Type:* str

---

##### `attribute_value`<sup>Required</sup> <a name="attribute_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.attributeValue"></a>

```python
attribute_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.conditions"></a>

```python
conditions: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules</a>

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environments

dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.items"></a>

```python
items: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironments.DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection">DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection</a>

---



