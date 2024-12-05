# `dataOciOnesubscriptionSubscribedServices` Submodule <a name="`dataOciOnesubscriptionSubscribedServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedServices <a name="DataOciOnesubscriptionSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services oci_onesubscription_subscribed_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices(
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
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionSubscribedServicesFilter]] = None,
  id: str = None,
  order_line_id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.orderLineId">order_line_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#filter DataOciOnesubscriptionSubscribedServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order_line_id`<sup>Optional</sup> <a name="order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.orderLineId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId">reset_order_line_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionSubscribedServicesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_order_line_id` <a name="reset_order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId"></a>

```python
def reset_order_line_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedServices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionSubscribedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices">subscribed_services</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput">order_line_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId">order_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter"></a>

```python
filter: DataOciOnesubscriptionSubscribedServicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a>

---

##### `subscribed_services`<sup>Required</sup> <a name="subscribed_services" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices"></a>

```python
subscribed_services: DataOciOnesubscriptionSubscribedServicesSubscribedServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionSubscribedServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `order_line_id_input`<sup>Optional</sup> <a name="order_line_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput"></a>

```python
order_line_id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `order_line_id`<sup>Required</sup> <a name="order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId"></a>

```python
order_line_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServicesConfig <a name="DataOciOnesubscriptionSubscribedServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionSubscribedServicesFilter]] = None,
  id: str = None,
  order_line_id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId">order_line_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionSubscribedServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#filter DataOciOnesubscriptionSubscribedServices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `order_line_id`<sup>Optional</sup> <a name="order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId"></a>

```python
order_line_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}.

---

### DataOciOnesubscriptionSubscribedServicesFilter <a name="DataOciOnesubscriptionSubscribedServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}.

---

### DataOciOnesubscriptionSubscribedServicesSubscribedServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact()
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServicesFilterList <a name="DataOciOnesubscriptionSubscribedServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionSubscribedServicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]]

---


### DataOciOnesubscriptionSubscribedServicesFilterOutputReference <a name="DataOciOnesubscriptionSubscribedServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOnesubscriptionSubscribedServicesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter">DataOciOnesubscriptionSubscribedServicesFilter</a>]

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">available_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">funded_allocation_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">line_net_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_amount`<sup>Required</sup> <a name="available_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```python
available_amount: str
```

- *Type:* str

---

##### `funded_allocation_value`<sup>Required</sup> <a name="funded_allocation_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```python
funded_allocation_value: str
```

- *Type:* str

---

##### `line_net_amount`<sup>Required</sup> <a name="line_net_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```python
line_net_amount: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail">admin_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId">agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName">agreement_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType">agreement_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount">available_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency">billing_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress">bill_to_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact">bill_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer">bill_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber">booking_opty_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail">buyer_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId">commitment_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices">commitment_services</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage">credit_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi">csi</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference">customer_transaction_reference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion">data_center_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew">eligible_to_renew</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress">end_user_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact">end_user_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer">end_user_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet">fulfillment_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue">funded_allocation_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance">is_allowance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList">is_cap_to_price_list</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled">is_credit_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage">is_having_usage</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg">is_payg</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard">is_single_rate_card</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment">is_variable_commitment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount">line_net_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet">major_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType">operation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId">order_header_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId">order_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber">order_line_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber">order_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType">order_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount">original_promo_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo">overage_bill_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage">overage_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy">overage_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount">partner_credit_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType">partner_transaction_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy">payg_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber">payment_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm">payment_term</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod">price_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel">pricing_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType">program_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId">promo_order_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType">promotion_pricing_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource">provisioning_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage">rate_card_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards">rate_cards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType">ratecard_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId">renewal_opty_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber">renewal_opty_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType">renewal_opty_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId">renewed_subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress">reseller_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact">reseller_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer">reseller_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId">revenue_line_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber">revenue_line_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc">revised_arr_in_lc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc">revised_arr_in_sc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId">sales_account_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel">sales_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress">service_to_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact">service_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer">service_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact">sold_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer">sold_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType">start_date_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource">subscription_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc">system_arr_in_lc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc">system_arr_in_sc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc">system_atr_arr_in_lc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc">system_atr_arr_in_sc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue">term_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom">term_value_uom</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd">time_agreement_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig">time_customer_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd">time_majorset_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart">time_majorset_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry">time_payment_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned">time_provisioned</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent">time_service_configuration_email_sent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent">time_welcome_email_sent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue">total_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId">transaction_extension_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount">used_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_email`<sup>Required</sup> <a name="admin_email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail"></a>

```python
admin_email: str
```

- *Type:* str

---

##### `agreement_id`<sup>Required</sup> <a name="agreement_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId"></a>

```python
agreement_id: str
```

- *Type:* str

---

##### `agreement_name`<sup>Required</sup> <a name="agreement_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName"></a>

```python
agreement_name: str
```

- *Type:* str

---

##### `agreement_type`<sup>Required</sup> <a name="agreement_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType"></a>

```python
agreement_type: str
```

- *Type:* str

---

##### `available_amount`<sup>Required</sup> <a name="available_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount"></a>

```python
available_amount: str
```

- *Type:* str

---

##### `billing_frequency`<sup>Required</sup> <a name="billing_frequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency"></a>

```python
billing_frequency: str
```

- *Type:* str

---

##### `bill_to_address`<sup>Required</sup> <a name="bill_to_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress"></a>

```python
bill_to_address: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a>

---

##### `bill_to_contact`<sup>Required</sup> <a name="bill_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact"></a>

```python
bill_to_contact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a>

---

##### `bill_to_customer`<sup>Required</sup> <a name="bill_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer"></a>

```python
bill_to_customer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a>

---

##### `booking_opty_number`<sup>Required</sup> <a name="booking_opty_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```python
booking_opty_number: str
```

- *Type:* str

---

##### `buyer_email`<sup>Required</sup> <a name="buyer_email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail"></a>

```python
buyer_email: str
```

- *Type:* str

---

##### `commitment_schedule_id`<sup>Required</sup> <a name="commitment_schedule_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId"></a>

```python
commitment_schedule_id: str
```

- *Type:* str

---

##### `commitment_services`<sup>Required</sup> <a name="commitment_services" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices"></a>

```python
commitment_services: DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `credit_percentage`<sup>Required</sup> <a name="credit_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage"></a>

```python
credit_percentage: str
```

- *Type:* str

---

##### `csi`<sup>Required</sup> <a name="csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi"></a>

```python
csi: str
```

- *Type:* str

---

##### `customer_transaction_reference`<sup>Required</sup> <a name="customer_transaction_reference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference"></a>

```python
customer_transaction_reference: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `data_center_region`<sup>Required</sup> <a name="data_center_region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```python
data_center_region: str
```

- *Type:* str

---

##### `eligible_to_renew`<sup>Required</sup> <a name="eligible_to_renew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew"></a>

```python
eligible_to_renew: str
```

- *Type:* str

---

##### `end_user_address`<sup>Required</sup> <a name="end_user_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress"></a>

```python
end_user_address: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a>

---

##### `end_user_contact`<sup>Required</sup> <a name="end_user_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact"></a>

```python
end_user_contact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a>

---

##### `end_user_customer`<sup>Required</sup> <a name="end_user_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer"></a>

```python
end_user_customer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a>

---

##### `fulfillment_set`<sup>Required</sup> <a name="fulfillment_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet"></a>

```python
fulfillment_set: str
```

- *Type:* str

---

##### `funded_allocation_value`<sup>Required</sup> <a name="funded_allocation_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```python
funded_allocation_value: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_allowance`<sup>Required</sup> <a name="is_allowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance"></a>

```python
is_allowance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_cap_to_price_list`<sup>Required</sup> <a name="is_cap_to_price_list" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList"></a>

```python
is_cap_to_price_list: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_credit_enabled`<sup>Required</sup> <a name="is_credit_enabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled"></a>

```python
is_credit_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_having_usage`<sup>Required</sup> <a name="is_having_usage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage"></a>

```python
is_having_usage: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_payg`<sup>Required</sup> <a name="is_payg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg"></a>

```python
is_payg: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_single_rate_card`<sup>Required</sup> <a name="is_single_rate_card" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard"></a>

```python
is_single_rate_card: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_variable_commitment`<sup>Required</sup> <a name="is_variable_commitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment"></a>

```python
is_variable_commitment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `line_net_amount`<sup>Required</sup> <a name="line_net_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount"></a>

```python
line_net_amount: str
```

- *Type:* str

---

##### `major_set`<sup>Required</sup> <a name="major_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet"></a>

```python
major_set: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `operation_type`<sup>Required</sup> <a name="operation_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType"></a>

```python
operation_type: str
```

- *Type:* str

---

##### `order_header_id`<sup>Required</sup> <a name="order_header_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId"></a>

```python
order_header_id: str
```

- *Type:* str

---

##### `order_line_id`<sup>Required</sup> <a name="order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId"></a>

```python
order_line_id: str
```

- *Type:* str

---

##### `order_line_number`<sup>Required</sup> <a name="order_line_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber"></a>

```python
order_line_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `order_number`<sup>Required</sup> <a name="order_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber"></a>

```python
order_number: str
```

- *Type:* str

---

##### `order_type`<sup>Required</sup> <a name="order_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType"></a>

```python
order_type: str
```

- *Type:* str

---

##### `original_promo_amount`<sup>Required</sup> <a name="original_promo_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount"></a>

```python
original_promo_amount: str
```

- *Type:* str

---

##### `overage_bill_to`<sup>Required</sup> <a name="overage_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo"></a>

```python
overage_bill_to: str
```

- *Type:* str

---

##### `overage_discount_percentage`<sup>Required</sup> <a name="overage_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage"></a>

```python
overage_discount_percentage: str
```

- *Type:* str

---

##### `overage_policy`<sup>Required</sup> <a name="overage_policy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy"></a>

```python
overage_policy: str
```

- *Type:* str

---

##### `partner_credit_amount`<sup>Required</sup> <a name="partner_credit_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount"></a>

```python
partner_credit_amount: str
```

- *Type:* str

---

##### `partner_transaction_type`<sup>Required</sup> <a name="partner_transaction_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```python
partner_transaction_type: str
```

- *Type:* str

---

##### `payg_policy`<sup>Required</sup> <a name="payg_policy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy"></a>

```python
payg_policy: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `payment_number`<sup>Required</sup> <a name="payment_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber"></a>

```python
payment_number: str
```

- *Type:* str

---

##### `payment_term`<sup>Required</sup> <a name="payment_term" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm"></a>

```python
payment_term: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a>

---

##### `price_period`<sup>Required</sup> <a name="price_period" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod"></a>

```python
price_period: str
```

- *Type:* str

---

##### `pricing_model`<sup>Required</sup> <a name="pricing_model" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel"></a>

```python
pricing_model: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a>

---

##### `program_type`<sup>Required</sup> <a name="program_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType"></a>

```python
program_type: str
```

- *Type:* str

---

##### `promo_order_line_id`<sup>Required</sup> <a name="promo_order_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId"></a>

```python
promo_order_line_id: str
```

- *Type:* str

---

##### `promotion_pricing_type`<sup>Required</sup> <a name="promotion_pricing_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType"></a>

```python
promotion_pricing_type: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `provisioning_source`<sup>Required</sup> <a name="provisioning_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource"></a>

```python
provisioning_source: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `rate_card_discount_percentage`<sup>Required</sup> <a name="rate_card_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage"></a>

```python
rate_card_discount_percentage: str
```

- *Type:* str

---

##### `rate_cards`<sup>Required</sup> <a name="rate_cards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards"></a>

```python
rate_cards: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a>

---

##### `ratecard_type`<sup>Required</sup> <a name="ratecard_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType"></a>

```python
ratecard_type: str
```

- *Type:* str

---

##### `renewal_opty_id`<sup>Required</sup> <a name="renewal_opty_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId"></a>

```python
renewal_opty_id: str
```

- *Type:* str

---

##### `renewal_opty_number`<sup>Required</sup> <a name="renewal_opty_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber"></a>

```python
renewal_opty_number: str
```

- *Type:* str

---

##### `renewal_opty_type`<sup>Required</sup> <a name="renewal_opty_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType"></a>

```python
renewal_opty_type: str
```

- *Type:* str

---

##### `renewed_subscribed_service_id`<sup>Required</sup> <a name="renewed_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId"></a>

```python
renewed_subscribed_service_id: str
```

- *Type:* str

---

##### `reseller_address`<sup>Required</sup> <a name="reseller_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress"></a>

```python
reseller_address: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a>

---

##### `reseller_contact`<sup>Required</sup> <a name="reseller_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact"></a>

```python
reseller_contact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a>

---

##### `reseller_customer`<sup>Required</sup> <a name="reseller_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer"></a>

```python
reseller_customer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a>

---

##### `revenue_line_id`<sup>Required</sup> <a name="revenue_line_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId"></a>

```python
revenue_line_id: str
```

- *Type:* str

---

##### `revenue_line_number`<sup>Required</sup> <a name="revenue_line_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber"></a>

```python
revenue_line_number: str
```

- *Type:* str

---

##### `revised_arr_in_lc`<sup>Required</sup> <a name="revised_arr_in_lc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc"></a>

```python
revised_arr_in_lc: str
```

- *Type:* str

---

##### `revised_arr_in_sc`<sup>Required</sup> <a name="revised_arr_in_sc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc"></a>

```python
revised_arr_in_sc: str
```

- *Type:* str

---

##### `sales_account_party_id`<sup>Required</sup> <a name="sales_account_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId"></a>

```python
sales_account_party_id: str
```

- *Type:* str

---

##### `sales_channel`<sup>Required</sup> <a name="sales_channel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel"></a>

```python
sales_channel: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `service_to_address`<sup>Required</sup> <a name="service_to_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress"></a>

```python
service_to_address: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a>

---

##### `service_to_contact`<sup>Required</sup> <a name="service_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact"></a>

```python
service_to_contact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a>

---

##### `service_to_customer`<sup>Required</sup> <a name="service_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer"></a>

```python
service_to_customer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a>

---

##### `sold_to_contact`<sup>Required</sup> <a name="sold_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact"></a>

```python
sold_to_contact: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a>

---

##### `sold_to_customer`<sup>Required</sup> <a name="sold_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer"></a>

```python
sold_to_customer: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a>

---

##### `start_date_type`<sup>Required</sup> <a name="start_date_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType"></a>

```python
start_date_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `subscription_source`<sup>Required</sup> <a name="subscription_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource"></a>

```python
subscription_source: str
```

- *Type:* str

---

##### `system_arr_in_lc`<sup>Required</sup> <a name="system_arr_in_lc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc"></a>

```python
system_arr_in_lc: str
```

- *Type:* str

---

##### `system_arr_in_sc`<sup>Required</sup> <a name="system_arr_in_sc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc"></a>

```python
system_arr_in_sc: str
```

- *Type:* str

---

##### `system_atr_arr_in_lc`<sup>Required</sup> <a name="system_atr_arr_in_lc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc"></a>

```python
system_atr_arr_in_lc: str
```

- *Type:* str

---

##### `system_atr_arr_in_sc`<sup>Required</sup> <a name="system_atr_arr_in_sc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc"></a>

```python
system_atr_arr_in_sc: str
```

- *Type:* str

---

##### `term_value`<sup>Required</sup> <a name="term_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue"></a>

```python
term_value: str
```

- *Type:* str

---

##### `term_value_uom`<sup>Required</sup> <a name="term_value_uom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom"></a>

```python
term_value_uom: str
```

- *Type:* str

---

##### `time_agreement_end`<sup>Required</sup> <a name="time_agreement_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd"></a>

```python
time_agreement_end: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_customer_config`<sup>Required</sup> <a name="time_customer_config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig"></a>

```python
time_customer_config: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_majorset_end`<sup>Required</sup> <a name="time_majorset_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd"></a>

```python
time_majorset_end: str
```

- *Type:* str

---

##### `time_majorset_start`<sup>Required</sup> <a name="time_majorset_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart"></a>

```python
time_majorset_start: str
```

- *Type:* str

---

##### `time_payment_expiry`<sup>Required</sup> <a name="time_payment_expiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry"></a>

```python
time_payment_expiry: str
```

- *Type:* str

---

##### `time_provisioned`<sup>Required</sup> <a name="time_provisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned"></a>

```python
time_provisioned: str
```

- *Type:* str

---

##### `time_service_configuration_email_sent`<sup>Required</sup> <a name="time_service_configuration_email_sent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent"></a>

```python
time_service_configuration_email_sent: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `time_welcome_email_sent`<sup>Required</sup> <a name="time_welcome_email_sent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent"></a>

```python
time_welcome_email_sent: str
```

- *Type:* str

---

##### `total_value`<sup>Required</sup> <a name="total_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue"></a>

```python
total_value: str
```

- *Type:* str

---

##### `transaction_extension_id`<sup>Required</sup> <a name="transaction_extension_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId"></a>

```python
transaction_extension_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `used_amount`<sup>Required</sup> <a name="used_amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount"></a>

```python
used_amount: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode">iso_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision">std_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iso_code`<sup>Required</sup> <a name="iso_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode"></a>

```python
iso_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `std_precision`<sup>Required</sup> <a name="std_precision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```python
std_precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage">discretionary_discount_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier">is_tier</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice">overage_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers">rate_card_tiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency"></a>

```python
currency: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a>

---

##### `discretionary_discount_percentage`<sup>Required</sup> <a name="discretionary_discount_percentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```python
discretionary_discount_percentage: str
```

- *Type:* str

---

##### `is_tier`<sup>Required</sup> <a name="is_tier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier"></a>

```python
is_tier: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `overage_price`<sup>Required</sup> <a name="overage_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice"></a>

```python
overage_price: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a>

---

##### `rate_card_tiers`<sup>Required</sup> <a name="rate_card_tiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers"></a>

```python
rate_card_tiers: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a>

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice">overage_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity">up_to_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `overage_price`<sup>Required</sup> <a name="overage_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```python
overage_price: str
```

- *Type:* str

---

##### `up_to_quantity`<sup>Required</sup> <a name="up_to_quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```python
up_to_quantity: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_subscribed_services

dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber">tca_cust_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_cust_account_number`<sup>Required</sup> <a name="tca_cust_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```python
tca_cust_account_number: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a>

---



