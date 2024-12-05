# `dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule <a name="`dataOciFusionAppsFusionEnvironmentScheduledActivity` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivity <a name="DataOciFusionAppsFusionEnvironmentScheduledActivity" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity oci_fusion_apps_fusion_environment_scheduled_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  scheduled_activity_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scheduledActivityId">scheduled_activity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}.

---

##### `scheduled_activity_id`<sup>Required</sup> <a name="scheduled_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.scheduledActivityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentScheduledActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentScheduledActivity to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentScheduledActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentScheduledActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions">actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours">delay_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle">run_cycle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability">service_availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish">time_expected_finish</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart">time_scheduled_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput">scheduled_activity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId">scheduled_activity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.actions"></a>

```python
actions: DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList">DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList</a>

---

##### `delay_in_hours`<sup>Required</sup> <a name="delay_in_hours" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.delayInHours"></a>

```python
delay_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `run_cycle`<sup>Required</sup> <a name="run_cycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.runCycle"></a>

```python
run_cycle: str
```

- *Type:* str

---

##### `service_availability`<sup>Required</sup> <a name="service_availability" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.serviceAvailability"></a>

```python
service_availability: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_expected_finish`<sup>Required</sup> <a name="time_expected_finish" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeExpectedFinish"></a>

```python
time_expected_finish: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_scheduled_start`<sup>Required</sup> <a name="time_scheduled_start" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeScheduledStart"></a>

```python
time_scheduled_start: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scheduled_activity_id_input`<sup>Optional</sup> <a name="scheduled_activity_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityIdInput"></a>

```python
scheduled_activity_id_input: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scheduled_activity_id`<sup>Required</sup> <a name="scheduled_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.scheduledActivityId"></a>

```python
scheduled_activity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivity.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActions <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActions" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions()
```


### DataOciFusionAppsFusionEnvironmentScheduledActivityConfig <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  scheduled_activity_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId">scheduled_activity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#fusion_environment_id DataOciFusionAppsFusionEnvironmentScheduledActivity#fusion_environment_id}.

---

##### `scheduled_activity_id`<sup>Required</sup> <a name="scheduled_activity_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.scheduledActivityId"></a>

```python
scheduled_activity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#scheduled_activity_id DataOciFusionAppsFusionEnvironmentScheduledActivity#scheduled_activity_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_scheduled_activity#id DataOciFusionAppsFusionEnvironmentScheduledActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference <a name="DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_scheduled_activity

dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType">action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact">artifact</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier">qualifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey">reference_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_type`<sup>Required</sup> <a name="action_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.actionType"></a>

```python
action_type: str
```

- *Type:* str

---

##### `artifact`<sup>Required</sup> <a name="artifact" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.artifact"></a>

```python
artifact: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.qualifier"></a>

```python
qualifier: str
```

- *Type:* str

---

##### `reference_key`<sup>Required</sup> <a name="reference_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.referenceKey"></a>

```python
reference_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentScheduledActivityActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentScheduledActivity.DataOciFusionAppsFusionEnvironmentScheduledActivityActions">DataOciFusionAppsFusionEnvironmentScheduledActivityActions</a>

---



