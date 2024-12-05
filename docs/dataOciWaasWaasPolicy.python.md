# `dataOciWaasWaasPolicy` Submodule <a name="`dataOciWaasWaasPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaasWaasPolicy <a name="DataOciWaasWaasPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy oci_waas_waas_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  waas_policy_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.waasPolicyId">waas_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `waas_policy_id`<sup>Required</sup> <a name="waas_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.waasPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWaasWaasPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWaasWaasPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaasWaasPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains">additional_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname">cname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups">origin_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins">origins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig">policy_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig">waf_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput">waas_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId">waas_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `additional_domains`<sup>Required</sup> <a name="additional_domains" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.additionalDomains"></a>

```python
additional_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cname`<sup>Required</sup> <a name="cname" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.cname"></a>

```python
cname: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `origin_groups`<sup>Required</sup> <a name="origin_groups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.originGroups"></a>

```python
origin_groups: DataOciWaasWaasPolicyOriginGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList">DataOciWaasWaasPolicyOriginGroupsList</a>

---

##### `origins`<sup>Required</sup> <a name="origins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.origins"></a>

```python
origins: DataOciWaasWaasPolicyOriginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList">DataOciWaasWaasPolicyOriginsList</a>

---

##### `policy_config`<sup>Required</sup> <a name="policy_config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.policyConfig"></a>

```python
policy_config: DataOciWaasWaasPolicyPolicyConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList">DataOciWaasWaasPolicyPolicyConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `waf_config`<sup>Required</sup> <a name="waf_config" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.wafConfig"></a>

```python
waf_config: DataOciWaasWaasPolicyWafConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList">DataOciWaasWaasPolicyWafConfigList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `waas_policy_id_input`<sup>Optional</sup> <a name="waas_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyIdInput"></a>

```python
waas_policy_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `waas_policy_id`<sup>Required</sup> <a name="waas_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.waasPolicyId"></a>

```python
waas_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaasWaasPolicyConfig <a name="DataOciWaasWaasPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  waas_policy_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId">waas_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `waas_policy_id`<sup>Required</sup> <a name="waas_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.waasPolicyId"></a>

```python
waas_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciWaasWaasPolicyOriginGroups <a name="DataOciWaasWaasPolicyOriginGroups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups()
```


### DataOciWaasWaasPolicyOriginGroupsOriginGroup <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroup" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup()
```


### DataOciWaasWaasPolicyOrigins <a name="DataOciWaasWaasPolicyOrigins" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins()
```


### DataOciWaasWaasPolicyOriginsCustomHeaders <a name="DataOciWaasWaasPolicyOriginsCustomHeaders" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders()
```


### DataOciWaasWaasPolicyPolicyConfig <a name="DataOciWaasWaasPolicyPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig()
```


### DataOciWaasWaasPolicyPolicyConfigHealthChecks <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks()
```


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod()
```


### DataOciWaasWaasPolicyWafConfig <a name="DataOciWaasWaasPolicyWafConfig" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig()
```


### DataOciWaasWaasPolicyWafConfigAccessRules <a name="DataOciWaasWaasPolicyWafConfigAccessRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules()
```


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria()
```


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation()
```


### DataOciWaasWaasPolicyWafConfigAddressRateLimiting <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting()
```


### DataOciWaasWaasPolicyWafConfigCachingRules <a name="DataOciWaasWaasPolicyWafConfigCachingRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules()
```


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteria <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria()
```


### DataOciWaasWaasPolicyWafConfigCaptchas <a name="DataOciWaasWaasPolicyWafConfigCaptchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas()
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRules <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules()
```


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions()
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge()
```


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings()
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge()
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings()
```


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader()
```


### DataOciWaasWaasPolicyWafConfigJsChallenge <a name="DataOciWaasWaasPolicyWafConfigJsChallenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge()
```


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings()
```


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteria <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria()
```


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader()
```


### DataOciWaasWaasPolicyWafConfigProtectionSettings <a name="DataOciWaasWaasPolicyWafConfigProtectionSettings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings()
```


### DataOciWaasWaasPolicyWafConfigWhitelists <a name="DataOciWaasWaasPolicyWafConfigWhitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaasWaasPolicyOriginGroupsList <a name="DataOciWaasWaasPolicyOriginGroupsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyOriginGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupList <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyOriginGroupsOriginGroup
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroup">DataOciWaasWaasPolicyOriginGroupsOriginGroup</a>

---


### DataOciWaasWaasPolicyOriginGroupsOutputReference <a name="DataOciWaasWaasPolicyOriginGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup">origin_group</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `origin_group`<sup>Required</sup> <a name="origin_group" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.originGroup"></a>

```python
origin_group: DataOciWaasWaasPolicyOriginGroupsOriginGroupList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOriginGroupList">DataOciWaasWaasPolicyOriginGroupsOriginGroupList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyOriginGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginGroups">DataOciWaasWaasPolicyOriginGroups</a>

---


### DataOciWaasWaasPolicyOriginsCustomHeadersList <a name="DataOciWaasWaasPolicyOriginsCustomHeadersList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference <a name="DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyOriginsCustomHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeaders">DataOciWaasWaasPolicyOriginsCustomHeaders</a>

---


### DataOciWaasWaasPolicyOriginsList <a name="DataOciWaasWaasPolicyOriginsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyOriginsOutputReference <a name="DataOciWaasWaasPolicyOriginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders">custom_headers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort">http_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort">https_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_headers`<sup>Required</sup> <a name="custom_headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.customHeaders"></a>

```python
custom_headers: DataOciWaasWaasPolicyOriginsCustomHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsCustomHeadersList">DataOciWaasWaasPolicyOriginsCustomHeadersList</a>

---

##### `http_port`<sup>Required</sup> <a name="http_port" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpPort"></a>

```python
http_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `https_port`<sup>Required</sup> <a name="https_port" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.httpsPort"></a>

```python
https_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `label`<sup>Required</sup> <a name="label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOriginsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyOrigins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyOrigins">DataOciWaasWaasPolicyOrigins</a>

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksList <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup">expected_response_code_group</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText">expected_response_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers">headers</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds">interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled">is_response_text_check_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expected_response_code_group`<sup>Required</sup> <a name="expected_response_code_group" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseCodeGroup"></a>

```python
expected_response_code_group: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expected_response_text`<sup>Required</sup> <a name="expected_response_text" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.expectedResponseText"></a>

```python
expected_response_text: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.headers"></a>

```python
headers: StringMap
```

- *Type:* cdktf.StringMap

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_in_seconds`<sup>Required</sup> <a name="interval_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.intervalInSeconds"></a>

```python
interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_response_text_check_enabled`<sup>Required</sup> <a name="is_response_text_check_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.isResponseTextCheckEnabled"></a>

```python
is_response_text_check_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyPolicyConfigHealthChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecks">DataOciWaasWaasPolicyPolicyConfigHealthChecks</a>

---


### DataOciWaasWaasPolicyPolicyConfigList <a name="DataOciWaasWaasPolicyPolicyConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyPolicyConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds">expiration_time_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `expiration_time_in_seconds`<sup>Required</sup> <a name="expiration_time_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.expirationTimeInSeconds"></a>

```python
expiration_time_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `method`<sup>Required</sup> <a name="method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod</a>

---


### DataOciWaasWaasPolicyPolicyConfigOutputReference <a name="DataOciWaasWaasPolicyPolicyConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup">cipher_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader">client_address_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks">health_checks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn">is_behind_cdn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected">is_cache_control_respected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled">is_https_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced">is_https_forced</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled">is_origin_compression_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled">is_response_buffering_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled">is_sni_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod">load_balancing_method</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols">tls_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes">websocket_path_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `cipher_group`<sup>Required</sup> <a name="cipher_group" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.cipherGroup"></a>

```python
cipher_group: str
```

- *Type:* str

---

##### `client_address_header`<sup>Required</sup> <a name="client_address_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.clientAddressHeader"></a>

```python
client_address_header: str
```

- *Type:* str

---

##### `health_checks`<sup>Required</sup> <a name="health_checks" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.healthChecks"></a>

```python
health_checks: DataOciWaasWaasPolicyPolicyConfigHealthChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigHealthChecksList">DataOciWaasWaasPolicyPolicyConfigHealthChecksList</a>

---

##### `is_behind_cdn`<sup>Required</sup> <a name="is_behind_cdn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isBehindCdn"></a>

```python
is_behind_cdn: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_cache_control_respected`<sup>Required</sup> <a name="is_cache_control_respected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isCacheControlRespected"></a>

```python
is_cache_control_respected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_https_enabled`<sup>Required</sup> <a name="is_https_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsEnabled"></a>

```python
is_https_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_https_forced`<sup>Required</sup> <a name="is_https_forced" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isHttpsForced"></a>

```python
is_https_forced: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_origin_compression_enabled`<sup>Required</sup> <a name="is_origin_compression_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isOriginCompressionEnabled"></a>

```python
is_origin_compression_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_response_buffering_enabled`<sup>Required</sup> <a name="is_response_buffering_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isResponseBufferingEnabled"></a>

```python
is_response_buffering_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_sni_enabled`<sup>Required</sup> <a name="is_sni_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.isSniEnabled"></a>

```python
is_sni_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `load_balancing_method`<sup>Required</sup> <a name="load_balancing_method" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.loadBalancingMethod"></a>

```python
load_balancing_method: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList">DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList</a>

---

##### `tls_protocols`<sup>Required</sup> <a name="tls_protocols" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.tlsProtocols"></a>

```python
tls_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `websocket_path_prefixes`<sup>Required</sup> <a name="websocket_path_prefixes" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.websocketPathPrefixes"></a>

```python
websocket_path_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyPolicyConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyPolicyConfig">DataOciWaasWaasPolicyPolicyConfig</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive">is_case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `is_case_sensitive`<sup>Required</sup> <a name="is_case_sensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.isCaseSensitive"></a>

```python
is_case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigAccessRulesCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteria">DataOciWaasWaasPolicyWafConfigAccessRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges">bypass_challenges</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode">redirect_response_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl">redirect_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation">response_header_manipulation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bypass_challenges`<sup>Required</sup> <a name="bypass_challenges" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.bypassChallenges"></a>

```python
bypass_challenges: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.criteria"></a>

```python
criteria: DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList">DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `redirect_response_code`<sup>Required</sup> <a name="redirect_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectResponseCode"></a>

```python
redirect_response_code: str
```

- *Type:* str

---

##### `redirect_url`<sup>Required</sup> <a name="redirect_url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.redirectUrl"></a>

```python
redirect_url: str
```

- *Type:* str

---

##### `response_header_manipulation`<sup>Required</sup> <a name="response_header_manipulation" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.responseHeaderManipulation"></a>

```python
response_header_manipulation: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigAccessRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRules">DataOciWaasWaasPolicyWafConfigAccessRules</a>

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference <a name="DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header">header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `header`<sup>Required</sup> <a name="header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.header"></a>

```python
header: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation">DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation</a>

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingList <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference <a name="DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress">allowed_rate_per_address</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress">max_delayed_count_per_address</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_rate_per_address`<sup>Required</sup> <a name="allowed_rate_per_address" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.allowedRatePerAddress"></a>

```python
allowed_rate_per_address: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_delayed_count_per_address`<sup>Required</sup> <a name="max_delayed_count_per_address" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.maxDelayedCountPerAddress"></a>

```python
max_delayed_count_per_address: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigAddressRateLimiting
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimiting">DataOciWaasWaasPolicyWafConfigAddressRateLimiting</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigCachingRulesCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteria">DataOciWaasWaasPolicyWafConfigCachingRulesCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigCachingRulesList <a name="DataOciWaasWaasPolicyWafConfigCachingRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration">caching_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration">client_caching_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled">is_client_caching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `caching_duration`<sup>Required</sup> <a name="caching_duration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.cachingDuration"></a>

```python
caching_duration: str
```

- *Type:* str

---

##### `client_caching_duration`<sup>Required</sup> <a name="client_caching_duration" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.clientCachingDuration"></a>

```python
client_caching_duration: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.criteria"></a>

```python
criteria: DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList">DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList</a>

---

##### `is_client_caching_enabled`<sup>Required</sup> <a name="is_client_caching_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.isClientCachingEnabled"></a>

```python
is_client_caching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigCachingRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRules">DataOciWaasWaasPolicyWafConfigCachingRules</a>

---


### DataOciWaasWaasPolicyWafConfigCaptchasList <a name="DataOciWaasWaasPolicyWafConfigCaptchasList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigCaptchasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigCaptchasOutputReference <a name="DataOciWaasWaasPolicyWafConfigCaptchasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText">footer_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText">header_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds">session_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel">submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `footer_text`<sup>Required</sup> <a name="footer_text" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.footerText"></a>

```python
footer_text: str
```

- *Type:* str

---

##### `header_text`<sup>Required</sup> <a name="header_text" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.headerText"></a>

```python
header_text: str
```

- *Type:* str

---

##### `session_expiration_in_seconds`<sup>Required</sup> <a name="session_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.sessionExpirationInSeconds"></a>

```python
session_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `submit_label`<sup>Required</sup> <a name="submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.submitLabel"></a>

```python
submit_label: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigCaptchas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchas">DataOciWaasWaasPolicyWafConfigCaptchas</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions">exclusions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.exclusions"></a>

```python
exclusions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions</a>

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference <a name="DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions">exclusions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.exclusions"></a>

```python
exclusions: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigCustomProtectionRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRules">DataOciWaasWaasPolicyWafConfigCustomProtectionRules</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds">action_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings">challenge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds">failure_threshold_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount">max_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds">max_address_count_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_expiration_in_seconds`<sup>Required</sup> <a name="action_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.actionExpirationInSeconds"></a>

```python
action_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `challenge_settings`<sup>Required</sup> <a name="challenge_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.challengeSettings"></a>

```python
challenge_settings: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList</a>

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold_expiration_in_seconds`<sup>Required</sup> <a name="failure_threshold_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```python
failure_threshold_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_address_count`<sup>Required</sup> <a name="max_address_count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCount"></a>

```python
max_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_address_count_expiration_in_seconds`<sup>Required</sup> <a name="max_address_count_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.maxAddressCountExpirationInSeconds"></a>

```python
max_address_count_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds">action_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings">challenge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds">failure_threshold_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold">interaction_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled">is_nat_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds">recording_period_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader">set_http_header</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_expiration_in_seconds`<sup>Required</sup> <a name="action_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.actionExpirationInSeconds"></a>

```python
action_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `challenge_settings`<sup>Required</sup> <a name="challenge_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.challengeSettings"></a>

```python
challenge_settings: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList</a>

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold_expiration_in_seconds`<sup>Required</sup> <a name="failure_threshold_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.failureThresholdExpirationInSeconds"></a>

```python
failure_threshold_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interaction_threshold`<sup>Required</sup> <a name="interaction_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.interactionThreshold"></a>

```python
interaction_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_nat_enabled`<sup>Required</sup> <a name="is_nat_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.isNatEnabled"></a>

```python
is_nat_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `recording_period_in_seconds`<sup>Required</sup> <a name="recording_period_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.recordingPeriodInSeconds"></a>

```python
recording_period_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `set_http_header`<sup>Required</sup> <a name="set_http_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.setHttpHeader"></a>

```python
set_http_header: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge">DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter">captcha_footer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader">captcha_header</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel">captcha_submit_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle">captcha_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `captcha_footer`<sup>Required</sup> <a name="captcha_footer" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaFooter"></a>

```python
captcha_footer: str
```

- *Type:* str

---

##### `captcha_header`<sup>Required</sup> <a name="captcha_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaHeader"></a>

```python
captcha_header: str
```

- *Type:* str

---

##### `captcha_submit_label`<sup>Required</sup> <a name="captcha_submit_label" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaSubmitLabel"></a>

```python
captcha_submit_label: str
```

- *Type:* str

---

##### `captcha_title`<sup>Required</sup> <a name="captcha_title" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.captchaTitle"></a>

```python
captcha_title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive">is_case_sensitive</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `is_case_sensitive`<sup>Required</sup> <a name="is_case_sensitive" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.isCaseSensitive"></a>

```python
is_case_sensitive: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigJsChallengeCriteria
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteria">DataOciWaasWaasPolicyWafConfigJsChallengeCriteria</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds">action_expiration_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged">are_redirects_challenged</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings">challenge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria">criteria</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled">is_nat_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader">set_http_header</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `action_expiration_in_seconds`<sup>Required</sup> <a name="action_expiration_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.actionExpirationInSeconds"></a>

```python
action_expiration_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `are_redirects_challenged`<sup>Required</sup> <a name="are_redirects_challenged" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.areRedirectsChallenged"></a>

```python
are_redirects_challenged: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `challenge_settings`<sup>Required</sup> <a name="challenge_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.challengeSettings"></a>

```python
challenge_settings: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList">DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.criteria"></a>

```python
criteria: DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList">DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList</a>

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_nat_enabled`<sup>Required</sup> <a name="is_nat_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.isNatEnabled"></a>

```python
is_nat_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `set_http_header`<sup>Required</sup> <a name="set_http_header" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.setHttpHeader"></a>

```python
set_http_header: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigJsChallenge
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallenge">DataOciWaasWaasPolicyWafConfigJsChallenge</a>

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference <a name="DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader">DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader</a>

---


### DataOciWaasWaasPolicyWafConfigList <a name="DataOciWaasWaasPolicyWafConfigList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigOutputReference <a name="DataOciWaasWaasPolicyWafConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules">access_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting">address_rate_limiting</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules">caching_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas">captchas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules">custom_protection_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge">device_fingerprint_challenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge">human_interaction_challenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge">js_challenge</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin">origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups">origin_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings">protection_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists">whitelists</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_rules`<sup>Required</sup> <a name="access_rules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.accessRules"></a>

```python
access_rules: DataOciWaasWaasPolicyWafConfigAccessRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAccessRulesList">DataOciWaasWaasPolicyWafConfigAccessRulesList</a>

---

##### `address_rate_limiting`<sup>Required</sup> <a name="address_rate_limiting" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.addressRateLimiting"></a>

```python
address_rate_limiting: DataOciWaasWaasPolicyWafConfigAddressRateLimitingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigAddressRateLimitingList">DataOciWaasWaasPolicyWafConfigAddressRateLimitingList</a>

---

##### `caching_rules`<sup>Required</sup> <a name="caching_rules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.cachingRules"></a>

```python
caching_rules: DataOciWaasWaasPolicyWafConfigCachingRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCachingRulesList">DataOciWaasWaasPolicyWafConfigCachingRulesList</a>

---

##### `captchas`<sup>Required</sup> <a name="captchas" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.captchas"></a>

```python
captchas: DataOciWaasWaasPolicyWafConfigCaptchasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCaptchasList">DataOciWaasWaasPolicyWafConfigCaptchasList</a>

---

##### `custom_protection_rules`<sup>Required</sup> <a name="custom_protection_rules" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.customProtectionRules"></a>

```python
custom_protection_rules: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList">DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList</a>

---

##### `device_fingerprint_challenge`<sup>Required</sup> <a name="device_fingerprint_challenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.deviceFingerprintChallenge"></a>

```python
device_fingerprint_challenge: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList">DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList</a>

---

##### `human_interaction_challenge`<sup>Required</sup> <a name="human_interaction_challenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.humanInteractionChallenge"></a>

```python
human_interaction_challenge: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList">DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList</a>

---

##### `js_challenge`<sup>Required</sup> <a name="js_challenge" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.jsChallenge"></a>

```python
js_challenge: DataOciWaasWaasPolicyWafConfigJsChallengeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigJsChallengeList">DataOciWaasWaasPolicyWafConfigJsChallengeList</a>

---

##### `origin`<sup>Required</sup> <a name="origin" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.origin"></a>

```python
origin: str
```

- *Type:* str

---

##### `origin_groups`<sup>Required</sup> <a name="origin_groups" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.originGroups"></a>

```python
origin_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protection_settings`<sup>Required</sup> <a name="protection_settings" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.protectionSettings"></a>

```python
protection_settings: DataOciWaasWaasPolicyWafConfigProtectionSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList">DataOciWaasWaasPolicyWafConfigProtectionSettingsList</a>

---

##### `whitelists`<sup>Required</sup> <a name="whitelists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.whitelists"></a>

```python
whitelists: DataOciWaasWaasPolicyWafConfigWhitelistsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList">DataOciWaasWaasPolicyWafConfigWhitelistsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfig">DataOciWaasWaasPolicyWafConfig</a>

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsList <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference <a name="DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods">allowed_http_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction">block_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode">block_error_page_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription">block_error_page_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage">block_error_page_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode">block_response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected">is_response_inspected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount">max_argument_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument">max_name_length_per_argument</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB">max_response_size_in_ki_b</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments">max_total_name_length_of_arguments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes">media_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays">recommendations_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_http_methods`<sup>Required</sup> <a name="allowed_http_methods" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.allowedHttpMethods"></a>

```python
allowed_http_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_action`<sup>Required</sup> <a name="block_action" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockAction"></a>

```python
block_action: str
```

- *Type:* str

---

##### `block_error_page_code`<sup>Required</sup> <a name="block_error_page_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageCode"></a>

```python
block_error_page_code: str
```

- *Type:* str

---

##### `block_error_page_description`<sup>Required</sup> <a name="block_error_page_description" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageDescription"></a>

```python
block_error_page_description: str
```

- *Type:* str

---

##### `block_error_page_message`<sup>Required</sup> <a name="block_error_page_message" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockErrorPageMessage"></a>

```python
block_error_page_message: str
```

- *Type:* str

---

##### `block_response_code`<sup>Required</sup> <a name="block_response_code" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.blockResponseCode"></a>

```python
block_response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_response_inspected`<sup>Required</sup> <a name="is_response_inspected" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.isResponseInspected"></a>

```python
is_response_inspected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_argument_count`<sup>Required</sup> <a name="max_argument_count" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxArgumentCount"></a>

```python
max_argument_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_name_length_per_argument`<sup>Required</sup> <a name="max_name_length_per_argument" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxNameLengthPerArgument"></a>

```python
max_name_length_per_argument: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_response_size_in_ki_b`<sup>Required</sup> <a name="max_response_size_in_ki_b" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxResponseSizeInKiB"></a>

```python
max_response_size_in_ki_b: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_total_name_length_of_arguments`<sup>Required</sup> <a name="max_total_name_length_of_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.maxTotalNameLengthOfArguments"></a>

```python
max_total_name_length_of_arguments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `media_types`<sup>Required</sup> <a name="media_types" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.mediaTypes"></a>

```python
media_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recommendations_period_in_days`<sup>Required</sup> <a name="recommendations_period_in_days" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.recommendationsPeriodInDays"></a>

```python
recommendations_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigProtectionSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigProtectionSettings">DataOciWaasWaasPolicyWafConfigProtectionSettings</a>

---


### DataOciWaasWaasPolicyWafConfigWhitelistsList <a name="DataOciWaasWaasPolicyWafConfigWhitelistsList" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference <a name="DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waas_waas_policy

dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists">address_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `address_lists`<sup>Required</sup> <a name="address_lists" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.addressLists"></a>

```python
address_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaasWaasPolicyWafConfigWhitelists
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaasWaasPolicy.DataOciWaasWaasPolicyWafConfigWhitelists">DataOciWaasWaasPolicyWafConfigWhitelists</a>

---



