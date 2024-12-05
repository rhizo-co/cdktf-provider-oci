# `dataOciOnesubscriptionInvoices` Submodule <a name="`dataOciOnesubscriptionInvoices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionInvoices <a name="DataOciOnesubscriptionInvoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices oci_onesubscription_invoices}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ar_customer_transaction_id: str,
  compartment_id: str,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoicesFilter]] = None,
  id: str = None,
  time_from: str = None,
  time_to: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.arCustomerTransactionId">ar_customer_transaction_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#ar_customer_transaction_id DataOciOnesubscriptionInvoices#ar_customer_transaction_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#compartment_id DataOciOnesubscriptionInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#fields DataOciOnesubscriptionInvoices#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#id DataOciOnesubscriptionInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_from DataOciOnesubscriptionInvoices#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_to DataOciOnesubscriptionInvoices#time_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ar_customer_transaction_id`<sup>Required</sup> <a name="ar_customer_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.arCustomerTransactionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#ar_customer_transaction_id DataOciOnesubscriptionInvoices#ar_customer_transaction_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#compartment_id DataOciOnesubscriptionInvoices#compartment_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#fields DataOciOnesubscriptionInvoices#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#filter DataOciOnesubscriptionInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#id DataOciOnesubscriptionInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_from`<sup>Optional</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.timeFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_from DataOciOnesubscriptionInvoices#time_from}.

---

##### `time_to`<sup>Optional</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.Initializer.parameter.timeTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_to DataOciOnesubscriptionInvoices#time_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeFrom">reset_time_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeTo">reset_time_to</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoicesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]

---

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_from` <a name="reset_time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeFrom"></a>

```python
def reset_time_from() -> None
```

##### `reset_time_to` <a name="reset_time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.resetTimeTo"></a>

```python
def reset_time_to() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionInvoices resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOnesubscriptionInvoices resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOnesubscriptionInvoices to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOnesubscriptionInvoices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionInvoices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList">DataOciOnesubscriptionInvoicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.invoices">invoices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList">DataOciOnesubscriptionInvoicesInvoicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionIdInput">ar_customer_transaction_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFromInput">time_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeToInput">time_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionId">ar_customer_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFrom">time_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeTo">time_to</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filter"></a>

```python
filter: DataOciOnesubscriptionInvoicesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList">DataOciOnesubscriptionInvoicesFilterList</a>

---

##### `invoices`<sup>Required</sup> <a name="invoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.invoices"></a>

```python
invoices: DataOciOnesubscriptionInvoicesInvoicesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList">DataOciOnesubscriptionInvoicesInvoicesList</a>

---

##### `ar_customer_transaction_id_input`<sup>Optional</sup> <a name="ar_customer_transaction_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionIdInput"></a>

```python
ar_customer_transaction_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `time_from_input`<sup>Optional</sup> <a name="time_from_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFromInput"></a>

```python
time_from_input: str
```

- *Type:* str

---

##### `time_to_input`<sup>Optional</sup> <a name="time_to_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeToInput"></a>

```python
time_to_input: str
```

- *Type:* str

---

##### `ar_customer_transaction_id`<sup>Required</sup> <a name="ar_customer_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.arCustomerTransactionId"></a>

```python
ar_customer_transaction_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_from`<sup>Required</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

---

##### `time_to`<sup>Required</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoices.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionInvoicesConfig <a name="DataOciOnesubscriptionInvoicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ar_customer_transaction_id: str,
  compartment_id: str,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoicesFilter]] = None,
  id: str = None,
  time_from: str = None,
  time_to: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.arCustomerTransactionId">ar_customer_transaction_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#ar_customer_transaction_id DataOciOnesubscriptionInvoices#ar_customer_transaction_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#compartment_id DataOciOnesubscriptionInvoices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#fields DataOciOnesubscriptionInvoices#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#id DataOciOnesubscriptionInvoices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeFrom">time_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_from DataOciOnesubscriptionInvoices#time_from}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeTo">time_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_to DataOciOnesubscriptionInvoices#time_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ar_customer_transaction_id`<sup>Required</sup> <a name="ar_customer_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.arCustomerTransactionId"></a>

```python
ar_customer_transaction_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#ar_customer_transaction_id DataOciOnesubscriptionInvoices#ar_customer_transaction_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#compartment_id DataOciOnesubscriptionInvoices#compartment_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#fields DataOciOnesubscriptionInvoices#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#filter DataOciOnesubscriptionInvoices#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#id DataOciOnesubscriptionInvoices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_from`<sup>Optional</sup> <a name="time_from" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeFrom"></a>

```python
time_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_from DataOciOnesubscriptionInvoices#time_from}.

---

##### `time_to`<sup>Optional</sup> <a name="time_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesConfig.property.timeTo"></a>

```python
time_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#time_to DataOciOnesubscriptionInvoices#time_to}.

---

### DataOciOnesubscriptionInvoicesFilter <a name="DataOciOnesubscriptionInvoicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#name DataOciOnesubscriptionInvoices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#values DataOciOnesubscriptionInvoices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#regex DataOciOnesubscriptionInvoices#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#name DataOciOnesubscriptionInvoices#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#values DataOciOnesubscriptionInvoices#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_invoices#regex DataOciOnesubscriptionInvoices#regex}.

---

### DataOciOnesubscriptionInvoicesInvoices <a name="DataOciOnesubscriptionInvoicesInvoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices()
```


### DataOciOnesubscriptionInvoicesInvoicesBillToAddress <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress()
```


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation()
```


### DataOciOnesubscriptionInvoicesInvoicesBillToContact <a name="DataOciOnesubscriptionInvoicesInvoicesBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact()
```


### DataOciOnesubscriptionInvoicesInvoicesBillToCustomer <a name="DataOciOnesubscriptionInvoicesInvoicesBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer()
```


### DataOciOnesubscriptionInvoicesInvoicesCurrency <a name="DataOciOnesubscriptionInvoicesInvoicesCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency()
```


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLines <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLines" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines()
```


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct()
```


### DataOciOnesubscriptionInvoicesInvoicesOrganization <a name="DataOciOnesubscriptionInvoicesInvoicesOrganization" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization()
```


### DataOciOnesubscriptionInvoicesInvoicesPaymentTerm <a name="DataOciOnesubscriptionInvoicesInvoicesPaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionInvoicesFilterList <a name="DataOciOnesubscriptionInvoicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOnesubscriptionInvoicesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]]

---


### DataOciOnesubscriptionInvoicesFilterOutputReference <a name="DataOciOnesubscriptionInvoicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOnesubscriptionInvoicesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesFilter">DataOciOnesubscriptionInvoicesFilter</a>]

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address1">address1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address2">address2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.tcaLocationId">tca_location_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address1`<sup>Required</sup> <a name="address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address1"></a>

```python
address1: str
```

- *Type:* str

---

##### `address2`<sup>Required</sup> <a name="address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.address2"></a>

```python
address2: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tca_location_id`<sup>Required</sup> <a name="tca_location_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```python
tca_location_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocation</a>

---


### DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.billSiteUseId">bill_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isBillTo">is_bill_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isShipTo">is_ship_to</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.location">location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.phone">phone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.service2SiteUseId">service2_site_use_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaCustAcctSiteId">tca_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaPartySiteNumber">tca_party_site_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress">DataOciOnesubscriptionInvoicesInvoicesBillToAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bill_site_use_id`<sup>Required</sup> <a name="bill_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.billSiteUseId"></a>

```python
bill_site_use_id: str
```

- *Type:* str

---

##### `is_bill_to`<sup>Required</sup> <a name="is_bill_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isBillTo"></a>

```python
is_bill_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_ship_to`<sup>Required</sup> <a name="is_ship_to" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.isShipTo"></a>

```python
is_ship_to: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.location"></a>

```python
location: DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressLocationList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `phone`<sup>Required</sup> <a name="phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.phone"></a>

```python
phone: str
```

- *Type:* str

---

##### `service2_site_use_id`<sup>Required</sup> <a name="service2_site_use_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.service2SiteUseId"></a>

```python
service2_site_use_id: str
```

- *Type:* str

---

##### `tca_cust_acct_site_id`<sup>Required</sup> <a name="tca_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```python
tca_cust_acct_site_id: str
```

- *Type:* str

---

##### `tca_party_site_number`<sup>Required</sup> <a name="tca_party_site_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```python
tca_party_site_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesBillToAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddress">DataOciOnesubscriptionInvoicesInvoicesBillToAddress</a>

---


### DataOciOnesubscriptionInvoicesInvoicesBillToContactList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaContactId">tca_contact_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaCustAccntSiteId">tca_cust_accnt_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact">DataOciOnesubscriptionInvoicesInvoicesBillToContact</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tca_contact_id`<sup>Required</sup> <a name="tca_contact_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaContactId"></a>

```python
tca_contact_id: str
```

- *Type:* str

---

##### `tca_cust_accnt_site_id`<sup>Required</sup> <a name="tca_cust_accnt_site_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```python
tca_cust_accnt_site_id: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesBillToContact
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContact">DataOciOnesubscriptionInvoicesInvoicesBillToContact</a>

---


### DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList <a name="DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.customerChainType">customer_chain_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isChainCustomer">is_chain_customer</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isPublicSector">is_public_sector</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.namePhonetic">name_phonetic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountId">tca_customer_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountNumber">tca_customer_account_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyId">tca_party_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyNumber">tca_party_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer">DataOciOnesubscriptionInvoicesInvoicesBillToCustomer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_chain_type`<sup>Required</sup> <a name="customer_chain_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.customerChainType"></a>

```python
customer_chain_type: str
```

- *Type:* str

---

##### `is_chain_customer`<sup>Required</sup> <a name="is_chain_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isChainCustomer"></a>

```python
is_chain_customer: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_public_sector`<sup>Required</sup> <a name="is_public_sector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.isPublicSector"></a>

```python
is_public_sector: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_phonetic`<sup>Required</sup> <a name="name_phonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.namePhonetic"></a>

```python
name_phonetic: str
```

- *Type:* str

---

##### `tca_customer_account_id`<sup>Required</sup> <a name="tca_customer_account_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```python
tca_customer_account_id: str
```

- *Type:* str

---

##### `tca_customer_account_number`<sup>Required</sup> <a name="tca_customer_account_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaCustomerAccountNumber"></a>

```python
tca_customer_account_number: str
```

- *Type:* str

---

##### `tca_party_id`<sup>Required</sup> <a name="tca_party_id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyId"></a>

```python
tca_party_id: str
```

- *Type:* str

---

##### `tca_party_number`<sup>Required</sup> <a name="tca_party_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```python
tca_party_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesBillToCustomer
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomer">DataOciOnesubscriptionInvoicesInvoicesBillToCustomer</a>

---


### DataOciOnesubscriptionInvoicesInvoicesCurrencyList <a name="DataOciOnesubscriptionInvoicesInvoicesCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.isoCode">iso_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.stdPrecision">std_precision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency">DataOciOnesubscriptionInvoicesInvoicesCurrency</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iso_code`<sup>Required</sup> <a name="iso_code" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.isoCode"></a>

```python
iso_code: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `std_precision`<sup>Required</sup> <a name="std_precision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.stdPrecision"></a>

```python
std_precision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesCurrency
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrency">DataOciOnesubscriptionInvoicesInvoicesCurrency</a>

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.arInvoiceNumber">ar_invoice_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.dataCenter">data_center</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.product">product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines">DataOciOnesubscriptionInvoicesInvoicesInvoiceLines</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ar_invoice_number`<sup>Required</sup> <a name="ar_invoice_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.arInvoiceNumber"></a>

```python
ar_invoice_number: str
```

- *Type:* str

---

##### `data_center`<sup>Required</sup> <a name="data_center" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.dataCenter"></a>

```python
data_center: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.product"></a>

```python
product: DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList</a>

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesInvoiceLines
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLines">DataOciOnesubscriptionInvoicesInvoicesInvoiceLines</a>

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.billingCategory">billing_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.partNumber">part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.productCategory">product_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.ucmRateCardPartType">ucm_rate_card_part_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.unitOfMeasure">unit_of_measure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `billing_category`<sup>Required</sup> <a name="billing_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.billingCategory"></a>

```python
billing_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `part_number`<sup>Required</sup> <a name="part_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.partNumber"></a>

```python
part_number: str
```

- *Type:* str

---

##### `product_category`<sup>Required</sup> <a name="product_category" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.productCategory"></a>

```python
product_category: str
```

- *Type:* str

---

##### `ucm_rate_card_part_type`<sup>Required</sup> <a name="ucm_rate_card_part_type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.ucmRateCardPartType"></a>

```python
ucm_rate_card_part_type: str
```

- *Type:* str

---

##### `unit_of_measure`<sup>Required</sup> <a name="unit_of_measure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.unitOfMeasure"></a>

```python
unit_of_measure: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProductOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesProduct</a>

---


### DataOciOnesubscriptionInvoicesInvoicesList <a name="DataOciOnesubscriptionInvoicesInvoicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesOrganizationList <a name="DataOciOnesubscriptionInvoicesInvoicesOrganizationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization">DataOciOnesubscriptionInvoicesInvoicesOrganization</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesOrganization
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganization">DataOciOnesubscriptionInvoicesInvoicesOrganization</a>

---


### DataOciOnesubscriptionInvoicesInvoicesOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.arInvoices">ar_invoices</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToAddress">bill_to_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToContact">bill_to_contact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList">DataOciOnesubscriptionInvoicesInvoicesBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToCustomer">bill_to_customer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList">DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.currency">currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList">DataOciOnesubscriptionInvoicesInvoicesCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.invoiceLines">invoice_lines</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.organization">organization</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList">DataOciOnesubscriptionInvoicesInvoicesOrganizationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentTerm">payment_term</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList">DataOciOnesubscriptionInvoicesInvoicesPaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.receiptMethod">receipt_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.spmInvoiceNumber">spm_invoice_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.subscriptionNumber">subscription_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeInvoiceDate">time_invoice_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices">DataOciOnesubscriptionInvoicesInvoices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ar_invoices`<sup>Required</sup> <a name="ar_invoices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.arInvoices"></a>

```python
ar_invoices: str
```

- *Type:* str

---

##### `bill_to_address`<sup>Required</sup> <a name="bill_to_address" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToAddress"></a>

```python
bill_to_address: DataOciOnesubscriptionInvoicesInvoicesBillToAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToAddressList">DataOciOnesubscriptionInvoicesInvoicesBillToAddressList</a>

---

##### `bill_to_contact`<sup>Required</sup> <a name="bill_to_contact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToContact"></a>

```python
bill_to_contact: DataOciOnesubscriptionInvoicesInvoicesBillToContactList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToContactList">DataOciOnesubscriptionInvoicesInvoicesBillToContactList</a>

---

##### `bill_to_customer`<sup>Required</sup> <a name="bill_to_customer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.billToCustomer"></a>

```python
bill_to_customer: DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList">DataOciOnesubscriptionInvoicesInvoicesBillToCustomerList</a>

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `currency`<sup>Required</sup> <a name="currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.currency"></a>

```python
currency: DataOciOnesubscriptionInvoicesInvoicesCurrencyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesCurrencyList">DataOciOnesubscriptionInvoicesInvoicesCurrencyList</a>

---

##### `invoice_lines`<sup>Required</sup> <a name="invoice_lines" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.invoiceLines"></a>

```python
invoice_lines: DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList">DataOciOnesubscriptionInvoicesInvoicesInvoiceLinesList</a>

---

##### `organization`<sup>Required</sup> <a name="organization" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.organization"></a>

```python
organization: DataOciOnesubscriptionInvoicesInvoicesOrganizationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOrganizationList">DataOciOnesubscriptionInvoicesInvoicesOrganizationList</a>

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `payment_term`<sup>Required</sup> <a name="payment_term" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.paymentTerm"></a>

```python
payment_term: DataOciOnesubscriptionInvoicesInvoicesPaymentTermList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList">DataOciOnesubscriptionInvoicesInvoicesPaymentTermList</a>

---

##### `receipt_method`<sup>Required</sup> <a name="receipt_method" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.receiptMethod"></a>

```python
receipt_method: str
```

- *Type:* str

---

##### `spm_invoice_number`<sup>Required</sup> <a name="spm_invoice_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.spmInvoiceNumber"></a>

```python
spm_invoice_number: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subscription_number`<sup>Required</sup> <a name="subscription_number" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.subscriptionNumber"></a>

```python
subscription_number: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_invoice_date`<sup>Required</sup> <a name="time_invoice_date" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeInvoiceDate"></a>

```python
time_invoice_date: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoices
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoices">DataOciOnesubscriptionInvoicesInvoices</a>

---


### DataOciOnesubscriptionInvoicesInvoicesPaymentTermList <a name="DataOciOnesubscriptionInvoicesInvoicesPaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference <a name="DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_onesubscription_invoices

dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.isActive">is_active</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm">DataOciOnesubscriptionInvoicesInvoicesPaymentTerm</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_active`<sup>Required</sup> <a name="is_active" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.isActive"></a>

```python
is_active: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTermOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOnesubscriptionInvoicesInvoicesPaymentTerm
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionInvoices.DataOciOnesubscriptionInvoicesInvoicesPaymentTerm">DataOciOnesubscriptionInvoicesInvoicesPaymentTerm</a>

---



