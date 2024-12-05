# `dataOciOnesubscriptionBillingSchedules` Submodule <a name="`dataOciOnesubscriptionBillingSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionBillingSchedules <a name="DataOciOnesubscriptionBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules oci_onesubscription_billing_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules(
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
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionBillingSchedulesFilter]] = None,
  id: str = None,
  subscribed_service_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#filter DataOciOnesubscriptionBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribed_service_id`<sup>Optional</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.Initializer.parameter.subscribedServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId">reset_subscribed_service_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionBillingSchedulesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_subscribed_service_id` <a name="reset_subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.resetSubscribedServiceId"></a>

```python
def reset_subscribed_service_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionBillingSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionBillingSchedules to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionBillingSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionBillingSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules">billing_schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput">subscribed_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `billing_schedules`<sup>Required</sup> <a name="billing_schedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.billingSchedules"></a>

```python
billing_schedules: DataOciOnesubscriptionBillingSchedulesBillingSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filter"></a>

```python
filter: DataOciOnesubscriptionBillingSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList">DataOciOnesubscriptionBillingSchedulesFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionBillingSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscribed_service_id_input`<sup>Optional</sup> <a name="subscribed_service_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceIdInput"></a>

```python
subscribed_service_id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedules.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedules <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedules" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules()
```


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct()
```


### DataOciOnesubscriptionBillingSchedulesConfig <a name="DataOciOnesubscriptionBillingSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  subscription_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionBillingSchedulesFilter]] = None,
  id: str = None,
  subscribed_service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#compartment_id DataOciOnesubscriptionBillingSchedules#compartment_id}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscription_id DataOciOnesubscriptionBillingSchedules#subscription_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionBillingSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#filter DataOciOnesubscriptionBillingSchedules#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#id DataOciOnesubscriptionBillingSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subscribed_service_id`<sup>Optional</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesConfig.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#subscribed_service_id DataOciOnesubscriptionBillingSchedules#subscribed_service_id}.

---

### DataOciOnesubscriptionBillingSchedulesFilter <a name="DataOciOnesubscriptionBillingSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#name DataOciOnesubscriptionBillingSchedules#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#values DataOciOnesubscriptionBillingSchedules#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_billing_schedules#regex DataOciOnesubscriptionBillingSchedules#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionBillingSchedulesBillingSchedulesList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount">amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId">ar_customer_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber">ar_invoice_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency">billing_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus">invoice_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice">net_unit_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber">order_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId">subscribed_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing">time_invoicing</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amount`<sup>Required</sup> <a name="amount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.amount"></a>

```python
amount: str
```

- *Type:* str

---

##### `ar_customer_transaction_id`<sup>Required</sup> <a name="ar_customer_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arCustomerTransactionId"></a>

```python
ar_customer_transaction_id: str
```

- *Type:* str

---

##### `ar_invoice_number`<sup>Required</sup> <a name="ar_invoice_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.arInvoiceNumber"></a>

```python
ar_invoice_number: str
```

- *Type:* str

---

##### `billing_frequency`<sup>Required</sup> <a name="billing_frequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.billingFrequency"></a>

```python
billing_frequency: str
```

- *Type:* str

---

##### `invoice_status`<sup>Required</sup> <a name="invoice_status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.invoiceStatus"></a>

```python
invoice_status: str
```

- *Type:* str

---

##### `net_unit_price`<sup>Required</sup> <a name="net_unit_price" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.netUnitPrice"></a>

```python
net_unit_price: str
```

- *Type:* str

---

##### `order_number`<sup>Required</sup> <a name="order_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.orderNumber"></a>

```python
order_number: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `subscribed_service_id`<sup>Required</sup> <a name="subscribed_service_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.subscribedServiceId"></a>

```python
subscribed_service_id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_invoicing`<sup>Required</sup> <a name="time_invoicing" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeInvoicing"></a>

```python
time_invoicing: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionBillingSchedulesBillingSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedules">DataOciOnesubscriptionBillingSchedulesBillingSchedules</a>

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference <a name="DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct">DataOciOnesubscriptionBillingSchedulesBillingSchedulesProduct</a>

---


### DataOciOnesubscriptionBillingSchedulesFilterList <a name="DataOciOnesubscriptionBillingSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionBillingSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionBillingSchedulesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]]

---


### DataOciOnesubscriptionBillingSchedulesFilterOutputReference <a name="DataOciOnesubscriptionBillingSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_billing_schedules

dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOnesubscriptionBillingSchedulesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionBillingSchedules.DataOciOnesubscriptionBillingSchedulesFilter">DataOciOnesubscriptionBillingSchedulesFilter</a>]

---



