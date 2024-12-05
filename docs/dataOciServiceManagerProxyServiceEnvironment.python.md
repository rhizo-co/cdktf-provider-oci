# `dataOciServiceManagerProxyServiceEnvironment` Submodule <a name="`dataOciServiceManagerProxyServiceEnvironment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciServiceManagerProxyServiceEnvironment <a name="DataOciServiceManagerProxyServiceEnvironment" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment oci_service_manager_proxy_service_environment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment(
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
  service_environment_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.serviceEnvironmentId">service_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}.

---

##### `service_environment_id`<sup>Required</sup> <a name="service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.serviceEnvironmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciServiceManagerProxyServiceEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciServiceManagerProxyServiceEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciServiceManagerProxyServiceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciServiceManagerProxyServiceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.consoleUrl">console_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceDefinition">service_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentEndpoints">service_environment_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentIdInput">service_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentId">service_environment_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `console_url`<sup>Required</sup> <a name="console_url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.consoleUrl"></a>

```python
console_url: str
```

- *Type:* str

---

##### `service_definition`<sup>Required</sup> <a name="service_definition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceDefinition"></a>

```python
service_definition: DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList">DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList</a>

---

##### `service_environment_endpoints`<sup>Required</sup> <a name="service_environment_endpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentEndpoints"></a>

```python
service_environment_endpoints: DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `service_environment_id_input`<sup>Optional</sup> <a name="service_environment_id_input" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentIdInput"></a>

```python
service_environment_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `service_environment_id`<sup>Required</sup> <a name="service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.serviceEnvironmentId"></a>

```python
service_environment_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciServiceManagerProxyServiceEnvironmentConfig <a name="DataOciServiceManagerProxyServiceEnvironmentConfig" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  service_environment_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.serviceEnvironmentId">service_environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#compartment_id DataOciServiceManagerProxyServiceEnvironment#compartment_id}.

---

##### `service_environment_id`<sup>Required</sup> <a name="service_environment_id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.serviceEnvironmentId"></a>

```python
service_environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#service_environment_id DataOciServiceManagerProxyServiceEnvironment#service_environment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/service_manager_proxy_service_environment#id DataOciServiceManagerProxyServiceEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciServiceManagerProxyServiceEnvironmentServiceDefinition <a name="DataOciServiceManagerProxyServiceEnvironmentServiceDefinition" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition()
```


### DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints <a name="DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList <a name="DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.shortDisplayName">short_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentServiceDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `short_display_name`<sup>Required</sup> <a name="short_display_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.shortDisplayName"></a>

```python
short_display_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceManagerProxyServiceEnvironmentServiceDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceDefinition">DataOciServiceManagerProxyServiceEnvironmentServiceDefinition</a>

---


### DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList <a name="DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference <a name="DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_service_manager_proxy_service_environment

dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciServiceManagerProxyServiceEnvironment.DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints">DataOciServiceManagerProxyServiceEnvironmentServiceEnvironmentEndpoints</a>

---



