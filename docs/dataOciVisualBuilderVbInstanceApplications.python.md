# `dataOciVisualBuilderVbInstanceApplications` Submodule <a name="`dataOciVisualBuilderVbInstanceApplications` Submodule" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciVisualBuilderVbInstanceApplications <a name="DataOciVisualBuilderVbInstanceApplications" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications oci_visual_builder_vb_instance_applications}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vb_instance_id: str,
  id: str = None,
  idcs_open_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.vbInstanceId">vb_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.idcsOpenId">idcs_open_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vb_instance_id`<sup>Required</sup> <a name="vb_instance_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.vbInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcs_open_id`<sup>Optional</sup> <a name="idcs_open_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.Initializer.parameter.idcsOpenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetIdcsOpenId">reset_idcs_open_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idcs_open_id` <a name="reset_idcs_open_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.resetIdcsOpenId"></a>

```python
def reset_idcs_open_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciVisualBuilderVbInstanceApplications resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciVisualBuilderVbInstanceApplications resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciVisualBuilderVbInstanceApplications to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciVisualBuilderVbInstanceApplications that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciVisualBuilderVbInstanceApplications to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.applicationSummaryCollection">application_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenIdInput">idcs_open_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceIdInput">vb_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenId">idcs_open_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceId">vb_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_summary_collection`<sup>Required</sup> <a name="application_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.applicationSummaryCollection"></a>

```python
application_summary_collection: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList</a>

---

##### `idcs_open_id_input`<sup>Optional</sup> <a name="idcs_open_id_input" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenIdInput"></a>

```python
idcs_open_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `vb_instance_id_input`<sup>Optional</sup> <a name="vb_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceIdInput"></a>

```python
vb_instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_open_id`<sup>Required</sup> <a name="idcs_open_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.idcsOpenId"></a>

```python
idcs_open_id: str
```

- *Type:* str

---

##### `vb_instance_id`<sup>Required</sup> <a name="vb_instance_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.vbInstanceId"></a>

```python
vb_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplications.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection()
```


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems()
```


### DataOciVisualBuilderVbInstanceApplicationsConfig <a name="DataOciVisualBuilderVbInstanceApplicationsConfig" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  vb_instance_id: str,
  id: str = None,
  idcs_open_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.vbInstanceId">vb_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.idcsOpenId">idcs_open_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vb_instance_id`<sup>Required</sup> <a name="vb_instance_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.vbInstanceId"></a>

```python
vb_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#vb_instance_id DataOciVisualBuilderVbInstanceApplications#vb_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#id DataOciVisualBuilderVbInstanceApplications#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idcs_open_id`<sup>Optional</sup> <a name="idcs_open_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsConfig.property.idcsOpenId"></a>

```python
idcs_open_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/visual_builder_vb_instance_applications#idcs_open_id DataOciVisualBuilderVbInstanceApplications#idcs_open_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItems</a>

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference <a name="DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_visual_builder_vb_instance_applications

dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciVisualBuilderVbInstanceApplications.DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection">DataOciVisualBuilderVbInstanceApplicationsApplicationSummaryCollection</a>

---



