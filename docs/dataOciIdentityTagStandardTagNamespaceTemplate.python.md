# `dataOciIdentityTagStandardTagNamespaceTemplate` Submodule <a name="`dataOciIdentityTagStandardTagNamespaceTemplate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplate <a name="DataOciIdentityTagStandardTagNamespaceTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template oci_identity_tag_standard_tag_namespace_template}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate(
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
  standard_tag_namespace_name: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.standardTagNamespaceName">standard_tag_namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}.

---

##### `standard_tag_namespace_name`<sup>Required</sup> <a name="standard_tag_namespace_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.standardTagNamespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityTagStandardTagNamespaceTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityTagStandardTagNamespaceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityTagStandardTagNamespaceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tagDefinitionTemplates">tag_definition_templates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceNameInput">standard_tag_namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceName">standard_tag_namespace_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tag_definition_templates`<sup>Required</sup> <a name="tag_definition_templates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tagDefinitionTemplates"></a>

```python
tag_definition_templates: DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `standard_tag_namespace_name_input`<sup>Optional</sup> <a name="standard_tag_namespace_name_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceNameInput"></a>

```python
standard_tag_namespace_name_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `standard_tag_namespace_name`<sup>Required</sup> <a name="standard_tag_namespace_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceName"></a>

```python
standard_tag_namespace_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplateConfig <a name="DataOciIdentityTagStandardTagNamespaceTemplateConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  standard_tag_namespace_name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.standardTagNamespaceName">standard_tag_namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}.

---

##### `standard_tag_namespace_name`<sup>Required</sup> <a name="standard_tag_namespace_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.standardTagNamespaceName"></a>

```python
standard_tag_namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_tag_standard_tag_namespace_template

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.enumMutability">enum_mutability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.isCostTracking">is_cost_tracking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.possibleValues">possible_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.tagDefinitionName">tag_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enum_mutability`<sup>Required</sup> <a name="enum_mutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.enumMutability"></a>

```python
enum_mutability: str
```

- *Type:* str

---

##### `is_cost_tracking`<sup>Required</sup> <a name="is_cost_tracking" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.isCostTracking"></a>

```python
is_cost_tracking: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `possible_values`<sup>Required</sup> <a name="possible_values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.possibleValues"></a>

```python
possible_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_definition_name`<sup>Required</sup> <a name="tag_definition_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.tagDefinitionName"></a>

```python
tag_definition_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates</a>

---



