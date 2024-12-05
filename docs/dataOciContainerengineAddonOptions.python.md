# `dataOciContainerengineAddonOptions` Submodule <a name="`dataOciContainerengineAddonOptions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineAddonOptions <a name="DataOciContainerengineAddonOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options oci_containerengine_addon_options}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_version: str,
  addon_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciContainerengineAddonOptionsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#kubernetes_version DataOciContainerengineAddonOptions#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.addonName">addon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#addon_name DataOciContainerengineAddonOptions#addon_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#id DataOciContainerengineAddonOptions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.kubernetesVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#kubernetes_version DataOciContainerengineAddonOptions#kubernetes_version}.

---

##### `addon_name`<sup>Optional</sup> <a name="addon_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.addonName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#addon_name DataOciContainerengineAddonOptions#addon_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#filter DataOciContainerengineAddonOptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#id DataOciContainerengineAddonOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetAddonName">reset_addon_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciContainerengineAddonOptionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]

---

##### `reset_addon_name` <a name="reset_addon_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetAddonName"></a>

```python
def reset_addon_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerengineAddonOptions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerengineAddonOptions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerengineAddonOptions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerengineAddonOptions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineAddonOptions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.addonOptions">addon_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList">DataOciContainerengineAddonOptionsAddonOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList">DataOciContainerengineAddonOptionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.addonNameInput">addon_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.kubernetesVersionInput">kubernetes_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.addonName">addon_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `addon_options`<sup>Required</sup> <a name="addon_options" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.addonOptions"></a>

```python
addon_options: DataOciContainerengineAddonOptionsAddonOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList">DataOciContainerengineAddonOptionsAddonOptionsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.filter"></a>

```python
filter: DataOciContainerengineAddonOptionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList">DataOciContainerengineAddonOptionsFilterList</a>

---

##### `addon_name_input`<sup>Optional</sup> <a name="addon_name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.addonNameInput"></a>

```python
addon_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciContainerengineAddonOptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kubernetes_version_input`<sup>Optional</sup> <a name="kubernetes_version_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.kubernetesVersionInput"></a>

```python
kubernetes_version_input: str
```

- *Type:* str

---

##### `addon_name`<sup>Required</sup> <a name="addon_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.addonName"></a>

```python
addon_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineAddonOptionsAddonOptions <a name="DataOciContainerengineAddonOptionsAddonOptions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptions()
```


### DataOciContainerengineAddonOptionsAddonOptionsVersions <a name="DataOciContainerengineAddonOptionsAddonOptionsVersions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersions()
```


### DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations()
```


### DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters()
```


### DataOciContainerengineAddonOptionsConfig <a name="DataOciContainerengineAddonOptionsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kubernetes_version: str,
  addon_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciContainerengineAddonOptionsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#kubernetes_version DataOciContainerengineAddonOptions#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.addonName">addon_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#addon_name DataOciContainerengineAddonOptions#addon_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#id DataOciContainerengineAddonOptions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#kubernetes_version DataOciContainerengineAddonOptions#kubernetes_version}.

---

##### `addon_name`<sup>Optional</sup> <a name="addon_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.addonName"></a>

```python
addon_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#addon_name DataOciContainerengineAddonOptions#addon_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciContainerengineAddonOptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#filter DataOciContainerengineAddonOptions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#id DataOciContainerengineAddonOptions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerengineAddonOptionsFilter <a name="DataOciContainerengineAddonOptionsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#name DataOciContainerengineAddonOptions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#values DataOciContainerengineAddonOptions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#regex DataOciContainerengineAddonOptions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#name DataOciContainerengineAddonOptions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#values DataOciContainerengineAddonOptions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_addon_options#regex DataOciContainerengineAddonOptions#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineAddonOptionsAddonOptionsList <a name="DataOciContainerengineAddonOptionsAddonOptionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineAddonOptionsAddonOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineAddonOptionsAddonOptionsOutputReference <a name="DataOciContainerengineAddonOptionsAddonOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.addonGroup">addon_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.addonSchemaVersion">addon_schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.isEssential">is_essential</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.versions">versions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList">DataOciContainerengineAddonOptionsAddonOptionsVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptions">DataOciContainerengineAddonOptionsAddonOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addon_group`<sup>Required</sup> <a name="addon_group" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.addonGroup"></a>

```python
addon_group: str
```

- *Type:* str

---

##### `addon_schema_version`<sup>Required</sup> <a name="addon_schema_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.addonSchemaVersion"></a>

```python
addon_schema_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_essential`<sup>Required</sup> <a name="is_essential" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.isEssential"></a>

```python
is_essential: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `versions`<sup>Required</sup> <a name="versions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.versions"></a>

```python
versions: DataOciContainerengineAddonOptionsAddonOptionsVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList">DataOciContainerengineAddonOptionsAddonOptionsVersionsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineAddonOptionsAddonOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptions">DataOciContainerengineAddonOptionsAddonOptions</a>

---


### DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.isRequired">is_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations">DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_required`<sup>Required</sup> <a name="is_required" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.isRequired"></a>

```python
is_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations">DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurations</a>

---


### DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.exactKubernetesVersions">exact_kubernetes_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.maximumVersion">maximum_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.minimalVersion">minimal_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters">DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exact_kubernetes_versions`<sup>Required</sup> <a name="exact_kubernetes_versions" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.exactKubernetesVersions"></a>

```python
exact_kubernetes_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `maximum_version`<sup>Required</sup> <a name="maximum_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.maximumVersion"></a>

```python
maximum_version: str
```

- *Type:* str

---

##### `minimal_version`<sup>Required</sup> <a name="minimal_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.minimalVersion"></a>

```python
minimal_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters">DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFilters</a>

---


### DataOciContainerengineAddonOptionsAddonOptionsVersionsList <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference <a name="DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList">DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.kubernetesVersionFilters">kubernetes_version_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList">DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.versionNumber">version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersions">DataOciContainerengineAddonOptionsAddonOptionsVersions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.configurations"></a>

```python
configurations: DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList">DataOciContainerengineAddonOptionsAddonOptionsVersionsConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kubernetes_version_filters`<sup>Required</sup> <a name="kubernetes_version_filters" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.kubernetesVersionFilters"></a>

```python
kubernetes_version_filters: DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList">DataOciContainerengineAddonOptionsAddonOptionsVersionsKubernetesVersionFiltersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `version_number`<sup>Required</sup> <a name="version_number" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.versionNumber"></a>

```python
version_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineAddonOptionsAddonOptionsVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsAddonOptionsVersions">DataOciContainerengineAddonOptionsAddonOptionsVersions</a>

---


### DataOciContainerengineAddonOptionsFilterList <a name="DataOciContainerengineAddonOptionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineAddonOptionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciContainerengineAddonOptionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]]

---


### DataOciContainerengineAddonOptionsFilterOutputReference <a name="DataOciContainerengineAddonOptionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_addon_options

dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciContainerengineAddonOptionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineAddonOptions.DataOciContainerengineAddonOptionsFilter">DataOciContainerengineAddonOptionsFilter</a>]

---



