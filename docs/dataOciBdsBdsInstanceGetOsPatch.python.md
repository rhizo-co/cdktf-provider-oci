# `dataOciBdsBdsInstanceGetOsPatch` Submodule <a name="`dataOciBdsBdsInstanceGetOsPatch` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceGetOsPatch <a name="DataOciBdsBdsInstanceGetOsPatch" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch oci_bds_bds_instance_get_os_patch}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  os_patch_version: str,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceGetOsPatchFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.osPatchVersion">os_patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}.

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.osPatchVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#filter DataOciBdsBdsInstanceGetOsPatch#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceGetOsPatchFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceGetOsPatch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBdsBdsInstanceGetOsPatch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBdsBdsInstanceGetOsPatch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceGetOsPatch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion">min_bds_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap">min_compatible_odh_version_map</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate">release_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages">target_packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput">os_patch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filter"></a>

```python
filter: DataOciBdsBdsInstanceGetOsPatchFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList">DataOciBdsBdsInstanceGetOsPatchFilterList</a>

---

##### `min_bds_version`<sup>Required</sup> <a name="min_bds_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minBdsVersion"></a>

```python
min_bds_version: str
```

- *Type:* str

---

##### `min_compatible_odh_version_map`<sup>Required</sup> <a name="min_compatible_odh_version_map" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.minCompatibleOdhVersionMap"></a>

```python
min_compatible_odh_version_map: StringMap
```

- *Type:* cdktf.StringMap

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `release_date`<sup>Required</sup> <a name="release_date" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.releaseDate"></a>

```python
release_date: str
```

- *Type:* str

---

##### `target_packages`<sup>Required</sup> <a name="target_packages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.targetPackages"></a>

```python
target_packages: DataOciBdsBdsInstanceGetOsPatchTargetPackagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList">DataOciBdsBdsInstanceGetOsPatchTargetPackagesList</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceGetOsPatchFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `os_patch_version_input`<sup>Optional</sup> <a name="os_patch_version_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersionInput"></a>

```python
os_patch_version_input: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceGetOsPatchConfig <a name="DataOciBdsBdsInstanceGetOsPatchConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  os_patch_version: str,
  filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceGetOsPatchFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#bds_instance_id DataOciBdsBdsInstanceGetOsPatch#bds_instance_id}.

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#os_patch_version DataOciBdsBdsInstanceGetOsPatch#os_patch_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceGetOsPatchFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#filter DataOciBdsBdsInstanceGetOsPatch#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#id DataOciBdsBdsInstanceGetOsPatch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciBdsBdsInstanceGetOsPatchFilter <a name="DataOciBdsBdsInstanceGetOsPatchFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#name DataOciBdsBdsInstanceGetOsPatch#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#values DataOciBdsBdsInstanceGetOsPatch#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_get_os_patch#regex DataOciBdsBdsInstanceGetOsPatch#regex}.

---

### DataOciBdsBdsInstanceGetOsPatchTargetPackages <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackages" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceGetOsPatchFilterList <a name="DataOciBdsBdsInstanceGetOsPatchFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceGetOsPatchFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciBdsBdsInstanceGetOsPatchFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]]

---


### DataOciBdsBdsInstanceGetOsPatchFilterOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciBdsBdsInstanceGetOsPatchFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchFilter">DataOciBdsBdsInstanceGetOsPatchFilter</a>]

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesList <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference <a name="DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_bds_bds_instance_get_os_patch

dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs">related_cv_es</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion">target_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType">update_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `related_cv_es`<sup>Required</sup> <a name="related_cv_es" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.relatedCvEs"></a>

```python
related_cv_es: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_version`<sup>Required</sup> <a name="target_version" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.targetVersion"></a>

```python
target_version: str
```

- *Type:* str

---

##### `update_type`<sup>Required</sup> <a name="update_type" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.updateType"></a>

```python
update_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackagesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBdsBdsInstanceGetOsPatchTargetPackages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceGetOsPatch.DataOciBdsBdsInstanceGetOsPatchTargetPackages">DataOciBdsBdsInstanceGetOsPatchTargetPackages</a>

---



