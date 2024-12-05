# `dataOciWaaWebAppAccelerationPolicy` Submodule <a name="`dataOciWaaWebAppAccelerationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWaaWebAppAccelerationPolicy <a name="DataOciWaaWebAppAccelerationPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy oci_waa_web_app_acceleration_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  web_app_acceleration_policy_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `web_app_acceleration_policy_id`<sup>Required</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.Initializer.parameter.webAppAccelerationPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciWaaWebAppAccelerationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciWaaWebAppAccelerationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciWaaWebAppAccelerationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWaaWebAppAccelerationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCachingPolicy">response_caching_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCompressionPolicy">response_compression_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyIdInput">web_app_acceleration_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `response_caching_policy`<sup>Required</sup> <a name="response_caching_policy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCachingPolicy"></a>

```python
response_caching_policy: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList</a>

---

##### `response_compression_policy`<sup>Required</sup> <a name="response_compression_policy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.responseCompressionPolicy"></a>

```python
response_compression_policy: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `web_app_acceleration_policy_id_input`<sup>Optional</sup> <a name="web_app_acceleration_policy_id_input" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyIdInput"></a>

```python
web_app_acceleration_policy_id_input: str
```

- *Type:* str

---

##### `web_app_acceleration_policy_id`<sup>Required</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.webAppAccelerationPolicyId"></a>

```python
web_app_acceleration_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWaaWebAppAccelerationPolicyConfig <a name="DataOciWaaWebAppAccelerationPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  web_app_acceleration_policy_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.webAppAccelerationPolicyId">web_app_acceleration_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `web_app_acceleration_policy_id`<sup>Required</sup> <a name="web_app_acceleration_policy_id" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyConfig.property.webAppAccelerationPolicyId"></a>

```python
web_app_acceleration_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waa_web_app_acceleration_policy#web_app_acceleration_policy_id DataOciWaaWebAppAccelerationPolicy#web_app_acceleration_policy_id}.

---

### DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy <a name="DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy()
```


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy()
```


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList <a name="DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled">is_response_header_based_caching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_response_header_based_caching_enabled`<sup>Required</sup> <a name="is_response_header_based_caching_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.isResponseHeaderBasedCachingEnabled"></a>

```python
is_response_header_based_caching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy">DataOciWaaWebAppAccelerationPolicyResponseCachingPolicy</a>

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompression</a>

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference <a name="DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_waa_web_app_acceleration_policy

dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression">gzip_compression</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gzip_compression`<sup>Required</sup> <a name="gzip_compression" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.gzipCompression"></a>

```python
gzip_compression: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyGzipCompressionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWaaWebAppAccelerationPolicy.DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy">DataOciWaaWebAppAccelerationPolicyResponseCompressionPolicy</a>

---



