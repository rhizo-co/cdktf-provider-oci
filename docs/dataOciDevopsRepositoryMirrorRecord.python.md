# `dataOciDevopsRepositoryMirrorrecord` Submodule <a name="`dataOciDevopsRepositoryMirrorrecord` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositoryMirrorrecord <a name="DataOciDevopsRepositoryMirrorrecord" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord oci_devops_repository_mirrorrecord}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_mirrorrecord

dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mirror_record_type: str,
  repository_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.mirrorRecordType">mirror_record_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#mirror_record_type DataOciDevopsRepositoryMirrorrecord#mirror_record_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#repository_id DataOciDevopsRepositoryMirrorrecord#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#id DataOciDevopsRepositoryMirrorrecord#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mirror_record_type`<sup>Required</sup> <a name="mirror_record_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.mirrorRecordType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#mirror_record_type DataOciDevopsRepositoryMirrorrecord#mirror_record_type}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#repository_id DataOciDevopsRepositoryMirrorrecord#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#id DataOciDevopsRepositoryMirrorrecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorrecord resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_mirrorrecord

dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_mirrorrecord

dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_mirrorrecord

dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_mirrorrecord

dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsRepositoryMirrorrecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsRepositoryMirrorrecord to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsRepositoryMirrorrecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositoryMirrorrecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.enqueueTime">enqueue_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorStatus">mirror_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordTypeInput">mirror_record_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordType">mirror_record_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `enqueue_time`<sup>Required</sup> <a name="enqueue_time" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.enqueueTime"></a>

```python
enqueue_time: str
```

- *Type:* str

---

##### `mirror_status`<sup>Required</sup> <a name="mirror_status" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorStatus"></a>

```python
mirror_status: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mirror_record_type_input`<sup>Optional</sup> <a name="mirror_record_type_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordTypeInput"></a>

```python
mirror_record_type_input: str
```

- *Type:* str

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mirror_record_type`<sup>Required</sup> <a name="mirror_record_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.mirrorRecordType"></a>

```python
mirror_record_type: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecord.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositoryMirrorrecordConfig <a name="DataOciDevopsRepositoryMirrorrecordConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_mirrorrecord

dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mirror_record_type: str,
  repository_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.mirrorRecordType">mirror_record_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#mirror_record_type DataOciDevopsRepositoryMirrorrecord#mirror_record_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#repository_id DataOciDevopsRepositoryMirrorrecord#repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#id DataOciDevopsRepositoryMirrorrecord#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mirror_record_type`<sup>Required</sup> <a name="mirror_record_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.mirrorRecordType"></a>

```python
mirror_record_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#mirror_record_type DataOciDevopsRepositoryMirrorrecord#mirror_record_type}.

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#repository_id DataOciDevopsRepositoryMirrorrecord#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositoryMirrorrecord.DataOciDevopsRepositoryMirrorrecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_mirrorrecord#id DataOciDevopsRepositoryMirrorrecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


