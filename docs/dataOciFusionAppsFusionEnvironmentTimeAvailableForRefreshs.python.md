# `dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs` Submodule <a name="`dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs oci_fusion_apps_fusion_environment_time_available_for_refreshs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs(
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
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#fusion_environment_id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.fusionEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#fusion_environment_id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#filter DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.timeAvailableForRefreshCollection">time_available_for_refresh_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.fusionEnvironmentIdInput">fusion_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.filter"></a>

```python
filter: DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList</a>

---

##### `time_available_for_refresh_collection`<sup>Required</sup> <a name="time_available_for_refresh_collection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.timeAvailableForRefreshCollection"></a>

```python
time_available_for_refresh_collection: DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]

---

##### `fusion_environment_id_input`<sup>Optional</sup> <a name="fusion_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.fusionEnvironmentIdInput"></a>

```python
fusion_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fusion_environment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.fusionEnvironmentId">fusion_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#fusion_environment_id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fusion_environment_id`<sup>Required</sup> <a name="fusion_environment_id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.fusionEnvironmentId"></a>

```python
fusion_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#fusion_environment_id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#fusion_environment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#filter DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#id DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#name DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#values DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#regex DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#name DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#values DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fusion_apps_fusion_environment_time_available_for_refreshs#regex DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs#regex}.

---

### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection()
```


### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]]

---


### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsFilter</a>]

---


### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.timeAvailableForRefresh">time_available_for_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_available_for_refresh`<sup>Required</sup> <a name="time_available_for_refresh" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.timeAvailableForRefresh"></a>

```python
time_available_for_refresh: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItems</a>

---


### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference <a name="DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fusion_apps_fusion_environment_time_available_for_refreshs

dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.items"></a>

```python
items: DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshs.DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection">DataOciFusionAppsFusionEnvironmentTimeAvailableForRefreshsTimeAvailableForRefreshCollection</a>

---



