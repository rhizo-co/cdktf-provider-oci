# `dataOciOnesubscriptionSubscribedService` Submodule <a name="`dataOciOnesubscriptionSubscribedService` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedService <a name="DataOciOnesubscriptionSubscribedService" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service oci_onesubscription_subscribed_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subscribed_service_id: str,
  fields: typing.List[str] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.subscribedServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionSubscribedService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.adminEmail">admin_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementId">agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementName">agreement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementType">agreement_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.availableAmount">available_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billingFrequency">billing_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToAddress">bill_to_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList">DataOciOnesubscriptionSubscribedServiceBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToContact">bill_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList">DataOciOnesubscriptionSubscribedServiceBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToCustomer">bill_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList">DataOciOnesubscriptionSubscribedServiceBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.bookingOptyNumber">booking_opty_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.buyerEmail">buyer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentScheduleId">commitment_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentServices">commitment_services</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList">DataOciOnesubscriptionSubscribedServiceCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.creditPercentage">credit_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.csi">csi</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.customerTransactionReference">customer_transaction_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenterRegion">data_center_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.eligibleToRenew">eligible_to_renew</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserAddress">end_user_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList">DataOciOnesubscriptionSubscribedServiceEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserContact">end_user_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList">DataOciOnesubscriptionSubscribedServiceEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserCustomer">end_user_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList">DataOciOnesubscriptionSubscribedServiceEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fulfillmentSet">fulfillment_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fundedAllocationValue">funded_allocation_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isAllowance">is_allowance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCapToPriceList">is_cap_to_price_list</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCreditEnabled">is_credit_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isHavingUsage">is_having_usage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isPayg">is_payg</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isSingleRateCard">is_single_rate_card</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isVariableCommitment">is_variable_commitment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lineNetAmount">line_net_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.majorSet">major_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderHeaderId">order_header_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineId">order_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineNumber">order_line_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderNumber">order_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderType">order_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.originalPromoAmount">original_promo_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageBillTo">overage_bill_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageDiscountPercentage">overage_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overagePolicy">overage_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerCreditAmount">partner_credit_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerTransactionType">partner_transaction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paygPolicy">payg_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentNumber">payment_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentTerm">payment_term</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList">DataOciOnesubscriptionSubscribedServicePaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricePeriod">price_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricingModel">pricing_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList">DataOciOnesubscriptionSubscribedServiceProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.programType">program_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoOrderLineId">promo_order_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promotionPricingType">promotion_pricing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provisioningSource">provisioning_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCardDiscountPercentage">rate_card_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCards">rate_cards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList">DataOciOnesubscriptionSubscribedServiceRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.ratecardType">ratecard_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyId">renewal_opty_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyNumber">renewal_opty_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyType">renewal_opty_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewedSubscribedServiceId">renewed_subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerAddress">reseller_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList">DataOciOnesubscriptionSubscribedServiceResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerContact">reseller_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList">DataOciOnesubscriptionSubscribedServiceResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerCustomer">reseller_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList">DataOciOnesubscriptionSubscribedServiceResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineId">revenue_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineNumber">revenue_line_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInLc">revised_arr_in_lc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInSc">revised_arr_in_sc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesAccountPartyId">sales_account_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesChannel">sales_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToAddress">service_to_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList">DataOciOnesubscriptionSubscribedServiceServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToContact">service_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList">DataOciOnesubscriptionSubscribedServiceServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToCustomer">service_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList">DataOciOnesubscriptionSubscribedServiceServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToContact">sold_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList">DataOciOnesubscriptionSubscribedServiceSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToCustomer">sold_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList">DataOciOnesubscriptionSubscribedServiceSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.startDateType">start_date_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionSource">subscription_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInLc">system_arr_in_lc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInSc">system_arr_in_sc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInLc">system_atr_arr_in_lc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInSc">system_atr_arr_in_sc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValue">term_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValueUom">term_value_uom</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeAgreementEnd">time_agreement_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCustomerConfig">time_customer_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetEnd">time_majorset_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetStart">time_majorset_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timePaymentExpiry">time_payment_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeProvisioned">time_provisioned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeServiceConfigurationEmailSent">time_service_configuration_email_sent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeWelcomeEmailSent">time_welcome_email_sent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.totalValue">total_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.transactionExtensionId">transaction_extension_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.usedAmount">used_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceIdInput">subscribed_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `admin_email`<sup>Required</sup> <a name="admin_email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.adminEmail"></a>

```python
admin_email: str
```

- *Type:* str

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

---

##### `agreement_name`<sup>Required</sup> <a name="agreement_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementName"></a>

```python
agreement_name: str
```

- *Type:* str

---

##### `agreement_type`<sup>Required</sup> <a name="agreement_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.agreementType"></a>

```python
agreement_type: str
```

- *Type:* str

---

##### `available_amount`<sup>Required</sup> <a name="available_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.availableAmount"></a>

```python
available_amount: str
```

- *Type:* str

---

##### `billing_frequency`<sup>Required</sup> <a name="billing_frequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billingFrequency"></a>

```python
billing_frequency: str
```

- *Type:* str

---

##### `bill_to_address`<sup>Required</sup> <a name="bill_to_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToAddress"></a>

```python
bill_to_address: DataOciOnesubscriptionSubscribedServiceBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList">DataOciOnesubscriptionSubscribedServiceBillToAddressList</a>

---

##### `bill_to_contact`<sup>Required</sup> <a name="bill_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToContact"></a>

```python
bill_to_contact: DataOciOnesubscriptionSubscribedServiceBillToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList">DataOciOnesubscriptionSubscribedServiceBillToContactList</a>

---

##### `bill_to_customer`<sup>Required</sup> <a name="bill_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.billToCustomer"></a>

```python
bill_to_customer: DataOciOnesubscriptionSubscribedServiceBillToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList">DataOciOnesubscriptionSubscribedServiceBillToCustomerList</a>

---

##### `booking_opty_number`<sup>Required</sup> <a name="booking_opty_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.bookingOptyNumber"></a>

```python
booking_opty_number: str
```

- *Type:* str

---

##### `buyer_email`<sup>Required</sup> <a name="buyer_email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.buyerEmail"></a>

```python
buyer_email: str
```

- *Type:* str

---

##### `commitment_schedule_id`<sup>Required</sup> <a name="commitment_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentScheduleId"></a>

```python
commitment_schedule_id: str
```

- *Type:* str

---

##### `commitment_services`<sup>Required</sup> <a name="commitment_services" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.commitmentServices"></a>

```python
commitment_services: DataOciOnesubscriptionSubscribedServiceCommitmentServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList">DataOciOnesubscriptionSubscribedServiceCommitmentServicesList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `credit_percentage`<sup>Required</sup> <a name="credit_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.creditPercentage"></a>

```python
credit_percentage: str
```

- *Type:* str

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.csi"></a>

```python
csi: str
```

- *Type:* str

---

##### `customer_transaction_reference`<sup>Required</sup> <a name="customer_transaction_reference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.customerTransactionReference"></a>

```python
customer_transaction_reference: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `data_center_region`<sup>Required</sup> <a name="data_center_region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.dataCenterRegion"></a>

```python
data_center_region: str
```

- *Type:* str

---

##### `eligible_to_renew`<sup>Required</sup> <a name="eligible_to_renew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.eligibleToRenew"></a>

```python
eligible_to_renew: str
```

- *Type:* str

---

##### `end_user_address`<sup>Required</sup> <a name="end_user_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserAddress"></a>

```python
end_user_address: DataOciOnesubscriptionSubscribedServiceEndUserAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList">DataOciOnesubscriptionSubscribedServiceEndUserAddressList</a>

---

##### `end_user_contact`<sup>Required</sup> <a name="end_user_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserContact"></a>

```python
end_user_contact: DataOciOnesubscriptionSubscribedServiceEndUserContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList">DataOciOnesubscriptionSubscribedServiceEndUserContactList</a>

---

##### `end_user_customer`<sup>Required</sup> <a name="end_user_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.endUserCustomer"></a>

```python
end_user_customer: DataOciOnesubscriptionSubscribedServiceEndUserCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList">DataOciOnesubscriptionSubscribedServiceEndUserCustomerList</a>

---

##### `fulfillment_set`<sup>Required</sup> <a name="fulfillment_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fulfillmentSet"></a>

```python
fulfillment_set: str
```

- *Type:* str

---

##### `funded_allocation_value`<sup>Required</sup> <a name="funded_allocation_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fundedAllocationValue"></a>

```python
funded_allocation_value: str
```

- *Type:* str

---

##### `is_allowance`<sup>Required</sup> <a name="is_allowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isAllowance"></a>

```python
is_allowance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_cap_to_price_list`<sup>Required</sup> <a name="is_cap_to_price_list" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCapToPriceList"></a>

```python
is_cap_to_price_list: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_credit_enabled`<sup>Required</sup> <a name="is_credit_enabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isCreditEnabled"></a>

```python
is_credit_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_having_usage`<sup>Required</sup> <a name="is_having_usage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isHavingUsage"></a>

```python
is_having_usage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_payg`<sup>Required</sup> <a name="is_payg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isPayg"></a>

```python
is_payg: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_single_rate_card`<sup>Required</sup> <a name="is_single_rate_card" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isSingleRateCard"></a>

```python
is_single_rate_card: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_variable_commitment`<sup>Required</sup> <a name="is_variable_commitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.isVariableCommitment"></a>

```python
is_variable_commitment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `line_net_amount`<sup>Required</sup> <a name="line_net_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.lineNetAmount"></a>

```python
line_net_amount: str
```

- *Type:* str

---

##### `major_set`<sup>Required</sup> <a name="major_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.majorSet"></a>

```python
major_set: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `order_header_id`<sup>Required</sup> <a name="order_header_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderHeaderId"></a>

```python
order_header_id: str
```

- *Type:* str

---

##### `order_line_id`<sup>Required</sup> <a name="order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineId"></a>

```python
order_line_id: str
```

- *Type:* str

---

##### `order_line_number`<sup>Required</sup> <a name="order_line_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderLineNumber"></a>

```python
order_line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_number`<sup>Required</sup> <a name="order_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderNumber"></a>

```python
order_number: str
```

- *Type:* str

---

##### `order_type`<sup>Required</sup> <a name="order_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.orderType"></a>

```python
order_type: str
```

- *Type:* str

---

##### `original_promo_amount`<sup>Required</sup> <a name="original_promo_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.originalPromoAmount"></a>

```python
original_promo_amount: str
```

- *Type:* str

---

##### `overage_bill_to`<sup>Required</sup> <a name="overage_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageBillTo"></a>

```python
overage_bill_to: str
```

- *Type:* str

---

##### `overage_discount_percentage`<sup>Required</sup> <a name="overage_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overageDiscountPercentage"></a>

```python
overage_discount_percentage: str
```

- *Type:* str

---

##### `overage_policy`<sup>Required</sup> <a name="overage_policy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.overagePolicy"></a>

```python
overage_policy: str
```

- *Type:* str

---

##### `partner_credit_amount`<sup>Required</sup> <a name="partner_credit_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerCreditAmount"></a>

```python
partner_credit_amount: str
```

- *Type:* str

---

##### `partner_transaction_type`<sup>Required</sup> <a name="partner_transaction_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.partnerTransactionType"></a>

```python
partner_transaction_type: str
```

- *Type:* str

---

##### `payg_policy`<sup>Required</sup> <a name="payg_policy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paygPolicy"></a>

```python
payg_policy: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `payment_number`<sup>Required</sup> <a name="payment_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentNumber"></a>

```python
payment_number: str
```

- *Type:* str

---

##### `payment_term`<sup>Required</sup> <a name="payment_term" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.paymentTerm"></a>

```python
payment_term: DataOciOnesubscriptionSubscribedServicePaymentTermList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList">DataOciOnesubscriptionSubscribedServicePaymentTermList</a>

---

##### `price_period`<sup>Required</sup> <a name="price_period" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricePeriod"></a>

```python
price_period: str
```

- *Type:* str

---

##### `pricing_model`<sup>Required</sup> <a name="pricing_model" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.pricingModel"></a>

```python
pricing_model: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.product"></a>

```python
product: DataOciOnesubscriptionSubscribedServiceProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList">DataOciOnesubscriptionSubscribedServiceProductList</a>

---

##### `program_type`<sup>Required</sup> <a name="program_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.programType"></a>

```python
program_type: str
```

- *Type:* str

---

##### `promo_order_line_id`<sup>Required</sup> <a name="promo_order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoOrderLineId"></a>

```python
promo_order_line_id: str
```

- *Type:* str

---

##### `promotion_pricing_type`<sup>Required</sup> <a name="promotion_pricing_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promotionPricingType"></a>

```python
promotion_pricing_type: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `provisioning_source`<sup>Required</sup> <a name="provisioning_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.provisioningSource"></a>

```python
provisioning_source: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `rate_card_discount_percentage`<sup>Required</sup> <a name="rate_card_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCardDiscountPercentage"></a>

```python
rate_card_discount_percentage: str
```

- *Type:* str

---

##### `rate_cards`<sup>Required</sup> <a name="rate_cards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.rateCards"></a>

```python
rate_cards: DataOciOnesubscriptionSubscribedServiceRateCardsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList">DataOciOnesubscriptionSubscribedServiceRateCardsList</a>

---

##### `ratecard_type`<sup>Required</sup> <a name="ratecard_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.ratecardType"></a>

```python
ratecard_type: str
```

- *Type:* str

---

##### `renewal_opty_id`<sup>Required</sup> <a name="renewal_opty_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyId"></a>

```python
renewal_opty_id: str
```

- *Type:* str

---

##### `renewal_opty_number`<sup>Required</sup> <a name="renewal_opty_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyNumber"></a>

```python
renewal_opty_number: str
```

- *Type:* str

---

##### `renewal_opty_type`<sup>Required</sup> <a name="renewal_opty_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewalOptyType"></a>

```python
renewal_opty_type: str
```

- *Type:* str

---

##### `renewed_subscribed_service_id`<sup>Required</sup> <a name="renewed_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.renewedSubscribedServiceId"></a>

```python
renewed_subscribed_service_id: str
```

- *Type:* str

---

##### `reseller_address`<sup>Required</sup> <a name="reseller_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerAddress"></a>

```python
reseller_address: DataOciOnesubscriptionSubscribedServiceResellerAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList">DataOciOnesubscriptionSubscribedServiceResellerAddressList</a>

---

##### `reseller_contact`<sup>Required</sup> <a name="reseller_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerContact"></a>

```python
reseller_contact: DataOciOnesubscriptionSubscribedServiceResellerContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList">DataOciOnesubscriptionSubscribedServiceResellerContactList</a>

---

##### `reseller_customer`<sup>Required</sup> <a name="reseller_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.resellerCustomer"></a>

```python
reseller_customer: DataOciOnesubscriptionSubscribedServiceResellerCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList">DataOciOnesubscriptionSubscribedServiceResellerCustomerList</a>

---

##### `revenue_line_id`<sup>Required</sup> <a name="revenue_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineId"></a>

```python
revenue_line_id: str
```

- *Type:* str

---

##### `revenue_line_number`<sup>Required</sup> <a name="revenue_line_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revenueLineNumber"></a>

```python
revenue_line_number: str
```

- *Type:* str

---

##### `revised_arr_in_lc`<sup>Required</sup> <a name="revised_arr_in_lc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInLc"></a>

```python
revised_arr_in_lc: str
```

- *Type:* str

---

##### `revised_arr_in_sc`<sup>Required</sup> <a name="revised_arr_in_sc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.revisedArrInSc"></a>

```python
revised_arr_in_sc: str
```

- *Type:* str

---

##### `sales_account_party_id`<sup>Required</sup> <a name="sales_account_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesAccountPartyId"></a>

```python
sales_account_party_id: str
```

- *Type:* str

---

##### `sales_channel`<sup>Required</sup> <a name="sales_channel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.salesChannel"></a>

```python
sales_channel: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `service_to_address`<sup>Required</sup> <a name="service_to_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToAddress"></a>

```python
service_to_address: DataOciOnesubscriptionSubscribedServiceServiceToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList">DataOciOnesubscriptionSubscribedServiceServiceToAddressList</a>

---

##### `service_to_contact`<sup>Required</sup> <a name="service_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToContact"></a>

```python
service_to_contact: DataOciOnesubscriptionSubscribedServiceServiceToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList">DataOciOnesubscriptionSubscribedServiceServiceToContactList</a>

---

##### `service_to_customer`<sup>Required</sup> <a name="service_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.serviceToCustomer"></a>

```python
service_to_customer: DataOciOnesubscriptionSubscribedServiceServiceToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList">DataOciOnesubscriptionSubscribedServiceServiceToCustomerList</a>

---

##### `sold_to_contact`<sup>Required</sup> <a name="sold_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToContact"></a>

```python
sold_to_contact: DataOciOnesubscriptionSubscribedServiceSoldToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList">DataOciOnesubscriptionSubscribedServiceSoldToContactList</a>

---

##### `sold_to_customer`<sup>Required</sup> <a name="sold_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.soldToCustomer"></a>

```python
sold_to_customer: DataOciOnesubscriptionSubscribedServiceSoldToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList">DataOciOnesubscriptionSubscribedServiceSoldToCustomerList</a>

---

##### `start_date_type`<sup>Required</sup> <a name="start_date_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.startDateType"></a>

```python
start_date_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `subscription_source`<sup>Required</sup> <a name="subscription_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscriptionSource"></a>

```python
subscription_source: str
```

- *Type:* str

---

##### `system_arr_in_lc`<sup>Required</sup> <a name="system_arr_in_lc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInLc"></a>

```python
system_arr_in_lc: str
```

- *Type:* str

---

##### `system_arr_in_sc`<sup>Required</sup> <a name="system_arr_in_sc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemArrInSc"></a>

```python
system_arr_in_sc: str
```

- *Type:* str

---

##### `system_atr_arr_in_lc`<sup>Required</sup> <a name="system_atr_arr_in_lc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInLc"></a>

```python
system_atr_arr_in_lc: str
```

- *Type:* str

---

##### `system_atr_arr_in_sc`<sup>Required</sup> <a name="system_atr_arr_in_sc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.systemAtrArrInSc"></a>

```python
system_atr_arr_in_sc: str
```

- *Type:* str

---

##### `term_value`<sup>Required</sup> <a name="term_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValue"></a>

```python
term_value: str
```

- *Type:* str

---

##### `term_value_uom`<sup>Required</sup> <a name="term_value_uom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.termValueUom"></a>

```python
term_value_uom: str
```

- *Type:* str

---

##### `time_agreement_end`<sup>Required</sup> <a name="time_agreement_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeAgreementEnd"></a>

```python
time_agreement_end: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_customer_config`<sup>Required</sup> <a name="time_customer_config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeCustomerConfig"></a>

```python
time_customer_config: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_majorset_end`<sup>Required</sup> <a name="time_majorset_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetEnd"></a>

```python
time_majorset_end: str
```

- *Type:* str

---

##### `time_majorset_start`<sup>Required</sup> <a name="time_majorset_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeMajorsetStart"></a>

```python
time_majorset_start: str
```

- *Type:* str

---

##### `time_payment_expiry`<sup>Required</sup> <a name="time_payment_expiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timePaymentExpiry"></a>

```python
time_payment_expiry: str
```

- *Type:* str

---

##### `time_provisioned`<sup>Required</sup> <a name="time_provisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeProvisioned"></a>

```python
time_provisioned: str
```

- *Type:* str

---

##### `time_service_configuration_email_sent`<sup>Required</sup> <a name="time_service_configuration_email_sent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeServiceConfigurationEmailSent"></a>

```python
time_service_configuration_email_sent: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_welcome_email_sent`<sup>Required</sup> <a name="time_welcome_email_sent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.timeWelcomeEmailSent"></a>

```python
time_welcome_email_sent: str
```

- *Type:* str

---

##### `total_value`<sup>Required</sup> <a name="total_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.totalValue"></a>

```python
total_value: str
```

- *Type:* str

---

##### `transaction_extension_id`<sup>Required</sup> <a name="transaction_extension_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.transactionExtensionId"></a>

```python
transaction_extension_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `used_amount`<sup>Required</sup> <a name="used_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.usedAmount"></a>

```python
used_amount: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscribed_service_id_input`<sup>Optional</sup> <a name="subscribed_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceIdInput"></a>

```python
subscribed_service_id_input: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServiceBillToAddress <a name="DataOciOnesubscriptionSubscribedServiceBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress()
```


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation()
```


### DataOciOnesubscriptionSubscribedServiceBillToContact <a name="DataOciOnesubscriptionSubscribedServiceBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact()
```


### DataOciOnesubscriptionSubscribedServiceBillToCustomer <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer()
```


### DataOciOnesubscriptionSubscribedServiceCommitmentServices <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices()
```


### DataOciOnesubscriptionSubscribedServiceConfig <a name="DataOciOnesubscriptionSubscribedServiceConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subscribed_service_id: str,
  fields: typing.List[str] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#subscribed_service_id DataOciOnesubscriptionSubscribedService#subscribed_service_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#fields DataOciOnesubscriptionSubscribedService#fields}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_service#id DataOciOnesubscriptionSubscribedService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOnesubscriptionSubscribedServiceEndUserAddress <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress()
```


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation()
```


### DataOciOnesubscriptionSubscribedServiceEndUserContact <a name="DataOciOnesubscriptionSubscribedServiceEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact()
```


### DataOciOnesubscriptionSubscribedServiceEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer()
```


### DataOciOnesubscriptionSubscribedServicePaymentTerm <a name="DataOciOnesubscriptionSubscribedServicePaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm()
```


### DataOciOnesubscriptionSubscribedServiceProduct <a name="DataOciOnesubscriptionSubscribedServiceProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct()
```


### DataOciOnesubscriptionSubscribedServiceRateCards <a name="DataOciOnesubscriptionSubscribedServiceRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards()
```


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency()
```


### DataOciOnesubscriptionSubscribedServiceRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct()
```


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers()
```


### DataOciOnesubscriptionSubscribedServiceResellerAddress <a name="DataOciOnesubscriptionSubscribedServiceResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress()
```


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation()
```


### DataOciOnesubscriptionSubscribedServiceResellerContact <a name="DataOciOnesubscriptionSubscribedServiceResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact()
```


### DataOciOnesubscriptionSubscribedServiceResellerCustomer <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer()
```


### DataOciOnesubscriptionSubscribedServiceServiceToAddress <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress()
```


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation()
```


### DataOciOnesubscriptionSubscribedServiceServiceToContact <a name="DataOciOnesubscriptionSubscribedServiceServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact()
```


### DataOciOnesubscriptionSubscribedServiceServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer()
```


### DataOciOnesubscriptionSubscribedServiceSoldToContact <a name="DataOciOnesubscriptionSubscribedServiceSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact()
```


### DataOciOnesubscriptionSubscribedServiceSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServiceBillToAddressList <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation">DataOciOnesubscriptionSubscribedServiceBillToAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceBillToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocation">DataOciOnesubscriptionSubscribedServiceBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList">DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress">DataOciOnesubscriptionSubscribedServiceBillToAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList">DataOciOnesubscriptionSubscribedServiceBillToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToAddress">DataOciOnesubscriptionSubscribedServiceBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToContactList <a name="DataOciOnesubscriptionSubscribedServiceBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact">DataOciOnesubscriptionSubscribedServiceBillToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceBillToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToContact">DataOciOnesubscriptionSubscribedServiceBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer">DataOciOnesubscriptionSubscribedServiceBillToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceBillToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceBillToCustomer">DataOciOnesubscriptionSubscribedServiceBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.availableAmount">available_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fundedAllocationValue">funded_allocation_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.lineNetAmount">line_net_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices">DataOciOnesubscriptionSubscribedServiceCommitmentServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_amount`<sup>Required</sup> <a name="available_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.availableAmount"></a>

```python
available_amount: str
```

- *Type:* str

---

##### `funded_allocation_value`<sup>Required</sup> <a name="funded_allocation_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```python
funded_allocation_value: str
```

- *Type:* str

---

##### `line_net_amount`<sup>Required</sup> <a name="line_net_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.lineNetAmount"></a>

```python
line_net_amount: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceCommitmentServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceCommitmentServices">DataOciOnesubscriptionSubscribedServiceCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress">DataOciOnesubscriptionSubscribedServiceEndUserAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServiceEndUserAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceEndUserAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserAddress">DataOciOnesubscriptionSubscribedServiceEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserContactList <a name="DataOciOnesubscriptionSubscribedServiceEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact">DataOciOnesubscriptionSubscribedServiceEndUserContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceEndUserContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserContact">DataOciOnesubscriptionSubscribedServiceEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServiceEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer">DataOciOnesubscriptionSubscribedServiceEndUserCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceEndUserCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceEndUserCustomer">DataOciOnesubscriptionSubscribedServiceEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicePaymentTermList <a name="DataOciOnesubscriptionSubscribedServicePaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm">DataOciOnesubscriptionSubscribedServicePaymentTerm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTermOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicePaymentTerm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServicePaymentTerm">DataOciOnesubscriptionSubscribedServicePaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServiceProductList <a name="DataOciOnesubscriptionSubscribedServiceProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceProductOutputReference <a name="DataOciOnesubscriptionSubscribedServiceProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct">DataOciOnesubscriptionSubscribedServiceProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceProduct">DataOciOnesubscriptionSubscribedServiceProduct</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.isoCode">iso_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.stdPrecision">std_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency">DataOciOnesubscriptionSubscribedServiceRateCardsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iso_code`<sup>Required</sup> <a name="iso_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.isoCode"></a>

```python
iso_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `std_precision`<sup>Required</sup> <a name="std_precision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```python
std_precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceRateCardsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrency">DataOciOnesubscriptionSubscribedServiceRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.discretionaryDiscountPercentage">discretionary_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.isTier">is_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.overagePrice">overage_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList">DataOciOnesubscriptionSubscribedServiceRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.rateCardTiers">rate_card_tiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards">DataOciOnesubscriptionSubscribedServiceRateCards</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.currency"></a>

```python
currency: DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServiceRateCardsCurrencyList</a>

---

##### `discretionary_discount_percentage`<sup>Required</sup> <a name="discretionary_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```python
discretionary_discount_percentage: str
```

- *Type:* str

---

##### `is_tier`<sup>Required</sup> <a name="is_tier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.isTier"></a>

```python
is_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `overage_price`<sup>Required</sup> <a name="overage_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.overagePrice"></a>

```python
overage_price: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionSubscribedServiceRateCardsProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList">DataOciOnesubscriptionSubscribedServiceRateCardsProductList</a>

---

##### `rate_card_tiers`<sup>Required</sup> <a name="rate_card_tiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.rateCardTiers"></a>

```python
rate_card_tiers: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList</a>

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceRateCards
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCards">DataOciOnesubscriptionSubscribedServiceRateCards</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct">DataOciOnesubscriptionSubscribedServiceRateCardsProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceRateCardsProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsProduct">DataOciOnesubscriptionSubscribedServiceRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.overagePrice">overage_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.upToQuantity">up_to_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `overage_price`<sup>Required</sup> <a name="overage_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```python
overage_price: str
```

- *Type:* str

---

##### `up_to_quantity`<sup>Required</sup> <a name="up_to_quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```python
up_to_quantity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServiceRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressList <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation">DataOciOnesubscriptionSubscribedServiceResellerAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceResellerAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocation">DataOciOnesubscriptionSubscribedServiceResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList">DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress">DataOciOnesubscriptionSubscribedServiceResellerAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList">DataOciOnesubscriptionSubscribedServiceResellerAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceResellerAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerAddress">DataOciOnesubscriptionSubscribedServiceResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerContactList <a name="DataOciOnesubscriptionSubscribedServiceResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact">DataOciOnesubscriptionSubscribedServiceResellerContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceResellerContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerContact">DataOciOnesubscriptionSubscribedServiceResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServiceResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer">DataOciOnesubscriptionSubscribedServiceResellerCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceResellerCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceResellerCustomer">DataOciOnesubscriptionSubscribedServiceResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress">DataOciOnesubscriptionSubscribedServiceServiceToAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServiceServiceToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceServiceToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToAddress">DataOciOnesubscriptionSubscribedServiceServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToContactList <a name="DataOciOnesubscriptionSubscribedServiceServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact">DataOciOnesubscriptionSubscribedServiceServiceToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceServiceToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToContact">DataOciOnesubscriptionSubscribedServiceServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer">DataOciOnesubscriptionSubscribedServiceServiceToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceServiceToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceServiceToCustomer">DataOciOnesubscriptionSubscribedServiceServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServiceSoldToContactList <a name="DataOciOnesubscriptionSubscribedServiceSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact">DataOciOnesubscriptionSubscribedServiceSoldToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceSoldToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToContact">DataOciOnesubscriptionSubscribedServiceSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServiceSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_service

dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer">DataOciOnesubscriptionSubscribedServiceSoldToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServiceSoldToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedService.DataOciOnesubscriptionSubscribedServiceSoldToCustomer">DataOciOnesubscriptionSubscribedServiceSoldToCustomer</a>

---



