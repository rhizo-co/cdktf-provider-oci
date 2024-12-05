# `dataOciCoreIpsecAlgorithm` Submodule <a name="`dataOciCoreIpsecAlgorithm` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpsecAlgorithm <a name="DataOciCoreIpsecAlgorithm" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm oci_core_ipsec_algorithm}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCoreIpsecAlgorithm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCoreIpsecAlgorithm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCoreIpsecAlgorithm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpsecAlgorithm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters">allowed_phase_one_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters">allowed_phase_two_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters">default_phase_one_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters">default_phase_two_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `allowed_phase_one_parameters`<sup>Required</sup> <a name="allowed_phase_one_parameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseOneParameters"></a>

```python
allowed_phase_one_parameters: DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList</a>

---

##### `allowed_phase_two_parameters`<sup>Required</sup> <a name="allowed_phase_two_parameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.allowedPhaseTwoParameters"></a>

```python
allowed_phase_two_parameters: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList</a>

---

##### `default_phase_one_parameters`<sup>Required</sup> <a name="default_phase_one_parameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseOneParameters"></a>

```python
default_phase_one_parameters: DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList</a>

---

##### `default_phase_two_parameters`<sup>Required</sup> <a name="default_phase_two_parameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.defaultPhaseTwoParameters"></a>

```python
default_phase_two_parameters: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters()
```


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters()
```


### DataOciCoreIpsecAlgorithmConfig <a name="DataOciCoreIpsecAlgorithmConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ipsec_algorithm#id DataOciCoreIpsecAlgorithm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters()
```


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms">authentication_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups">dh_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms">encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_algorithms`<sup>Required</sup> <a name="authentication_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.authenticationAlgorithms"></a>

```python
authentication_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dh_groups`<sup>Required</sup> <a name="dh_groups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.dhGroups"></a>

```python
dh_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_algorithms`<sup>Required</sup> <a name="encryption_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.encryptionAlgorithms"></a>

```python
encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters">DataOciCoreIpsecAlgorithmAllowedPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms">authentication_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms">encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups">pfs_dh_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_algorithms`<sup>Required</sup> <a name="authentication_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.authenticationAlgorithms"></a>

```python
authentication_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `encryption_algorithms`<sup>Required</sup> <a name="encryption_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.encryptionAlgorithms"></a>

```python
encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pfs_dh_groups`<sup>Required</sup> <a name="pfs_dh_groups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.pfsDhGroups"></a>

```python
pfs_dh_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters">DataOciCoreIpsecAlgorithmAllowedPhaseTwoParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms">default_authentication_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups">default_dh_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms">default_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_authentication_algorithms`<sup>Required</sup> <a name="default_authentication_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```python
default_authentication_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_dh_groups`<sup>Required</sup> <a name="default_dh_groups" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultDhGroups"></a>

```python
default_dh_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_encryption_algorithms`<sup>Required</sup> <a name="default_encryption_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```python
default_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters">DataOciCoreIpsecAlgorithmDefaultPhaseOneParameters</a>

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference <a name="DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_core_ipsec_algorithm

dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms">default_authentication_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms">default_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup">default_pfs_dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_authentication_algorithms`<sup>Required</sup> <a name="default_authentication_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultAuthenticationAlgorithms"></a>

```python
default_authentication_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_encryption_algorithms`<sup>Required</sup> <a name="default_encryption_algorithms" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultEncryptionAlgorithms"></a>

```python
default_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_pfs_dh_group`<sup>Required</sup> <a name="default_pfs_dh_group" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.defaultPfsDhGroup"></a>

```python
default_pfs_dh_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpsecAlgorithm.DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters">DataOciCoreIpsecAlgorithmDefaultPhaseTwoParameters</a>

---



